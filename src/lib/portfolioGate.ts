const COOKIE_NAME = "portfolio_gate";
const TOKEN_PREFIX = "v1";

function getPassword() {
  return process.env.PORTFOLIO_PASSWORD ?? "";
}

function getSecret() {
  return process.env.PORTFOLIO_SESSION_SECRET ?? getPassword();
}

function bytesToHex(bytes: ArrayBuffer | Uint8Array) {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  return Array.from(view)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string) {
  const clean = hex.length % 2 === 0 ? hex : `0${hex}`;
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i += 1) {
    out[i] = Number.parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

async function hmacHex(message: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return bytesToHex(sig);
}

function timingSafeEqual(a: string, b: string) {
  const left = hexToBytes(a);
  const right = hexToBytes(b);
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let i = 0; i < left.length; i += 1) {
    diff |= left[i] ^ right[i];
  }
  return diff === 0;
}

export async function passwordsMatch(candidate: string) {
  const expected = getPassword();
  if (!expected || !candidate) return false;
  const secret = getSecret();
  const [left, right] = await Promise.all([
    hmacHex(candidate, secret),
    hmacHex(expected, secret),
  ]);
  return timingSafeEqual(left, right);
}

export async function createSessionToken() {
  const payload = `${TOKEN_PREFIX}.${Date.now()}`;
  const sig = await hmacHex(payload, getSecret());
  return `${payload}.${sig}`;
}

export async function isValidSessionToken(token: string | undefined) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== TOKEN_PREFIX) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  const expected = await hmacHex(payload, getSecret());
  return timingSafeEqual(parts[2], expected);
}

export const portfolioGate = {
  cookieName: COOKIE_NAME,
  cookieOptions: {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  },
};

export function safeReturnPath(value: FormDataEntryValue | string | null) {
  const raw = typeof value === "string" ? value : "/";
  if (!raw.startsWith("/") || raw.startsWith("//") || raw.includes("://")) {
    return "/";
  }
  return raw;
}
