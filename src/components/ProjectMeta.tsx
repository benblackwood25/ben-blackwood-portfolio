import { BUTTON, CHIP, FOCUS_RING } from "./siteChrome";
import { TYPE } from "./type";

export default function ProjectMeta({
  role,
  company,
  product,
  scope,
  tags,
  prototypeHref,
}: {
  role: string;
  company?: string;
  product: string;
  scope: string;
  tags: readonly string[];
  prototypeHref?: string;
}) {
  return (
    <>
      <dl className="mt-8 grid gap-4 sm:grid-cols-3">
        <div>
          <dt className={`${TYPE.small}`}>Role</dt>
          <dd className={`mt-2 ${TYPE.h3}`}>{role}</dd>
        </div>
        {company ? (
          <div>
            <dt className={`${TYPE.small}`}>Company</dt>
            <dd className={`mt-2 ${TYPE.h3}`}>{company}</dd>
          </div>
        ) : null}
        <div>
          <dt className={`${TYPE.small}`}>Product</dt>
          <dd className={`mt-2 ${TYPE.h3}`}>{product}</dd>
        </div>
        <div className="sm:col-span-3">
          <dt className={`${TYPE.small}`}>Scope</dt>
          <dd className={`mt-2 ${TYPE.h3}`}>{scope}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className={CHIP}>
            {t}
          </span>
        ))}
      </div>

      {prototypeHref ? (
        <a
          href={prototypeHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${BUTTON} mt-8 ${FOCUS_RING}`}
        >
          View prototype
        </a>
      ) : null}
    </>
  );
}
