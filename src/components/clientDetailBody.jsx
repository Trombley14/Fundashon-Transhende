import React from "react";
import "../styles/client-detail-body.css";

// --- helpers ---------------------------------------------------------------
function fmt(d) {
  if (!d) return "-";
  // accept "YYYY-MM-DD" or Date
  const date = typeof d === "string" ? new Date(d) : d;
  if (Number.isNaN(date.getTime())) return "-";
  return date.toISOString().slice(0, 10);
}
function daysUntil(dateStr) {
  if (!dateStr) return undefined;
  const now = new Date();
  const d = new Date(dateStr);
  const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  return diff;
}
function expiryBadge(expiry) {
  const left = daysUntil(expiry);
  if (left === undefined) return { text: "No expiry", cls: "badge--muted" };
  if (left < 0) return { text: "Expired", cls: "badge--danger" };
  if (left <= 14)
    return {
      text: `${left} day${left === 1 ? "" : "s"} left`,
      cls: "badge--warn",
    };
  return { text: "Valid", cls: "badge--ok" };
}

// --- subcomponents ---------------------------------------------------------
function InfoRow({ label, value, full }) {
  if (!value) return null;
  return (
    <div className={`info ${full ? "info--full" : ""}`}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function Card({ title, children, right }) {
  return (
    <article className="card">
      <header className="card__hdr">
        <h2 className="card__title">{title}</h2>
        {right ? <div className="card__right">{right}</div> : null}
      </header>
      <div className="card__body">{children}</div>
    </article>
  );
}

function DocumentTile({ kind, doc, onReupload }) {
  const badge = expiryBadge(doc?.expiry);
  return (
    <div className="doc-tile">
      <div className="doc-tile__meta">
        <div className="doc-tile__kind">{kind}</div>
        <span className={`badge ${badge.cls}`}>{badge.text}</span>
      </div>
      <div className="doc-tile__rows">
        <div className="row">
          <span>Uploaded</span>
          <strong>{fmt(doc?.uploadedAt)}</strong>
        </div>
        <div className="row">
          <span>Expiry</span>
          <strong>{fmt(doc?.expiry)}</strong>
        </div>
        <div className="row">
          <span>File</span>
          {doc?.url ? (
            <a className="link" href={doc.url} target="_blank" rel="noreferrer">
              {doc?.name || "View"}
            </a>
          ) : (
            <span className="muted">No file</span>
          )}
        </div>
      </div>
      <div className="doc-tile__actions">
        <button className="btn btn--outline" onClick={onReupload}>
          Re-upload
        </button>
      </div>
    </div>
  );
}

// --- main body -------------------------------------------------------------
/**
 * Props:
 * client = {
 *   email, phones: [..], address: { line, district },
 *   idNumber, dob, gender, doctor, mobility, insurance, details,
 *   notes,
 *   documents: {
 *     idCard: { name, url, uploadedAt, expiry },
 *     svbCard: { name, url, uploadedAt, expiry }
 *   }
 * }
 */
export default function ClientDetailBody({
  client,
  onReuploadIdCard,
  onReuploadSvbCard,
}) {
  const phone1 = client?.phone;
  const phone2 = client?.phones?.[1];

  return (
    <div className="client-body">
      {/* Contact (full width) */}
      <Card title="Contact">
        <div className="contact-grid">
          <div className="kv">
            <span>Email</span>
            <strong>{client?.email || "-"}</strong>
          </div>
          <div className="kv">
            <span>Phone</span>
            <strong>{phone1 || "-"}</strong>
          </div>
          <div className="kv">
            <span>Address</span>
            <strong>{client?.address || "-"}</strong>
          </div>
        </div>
      </Card>

      <div className="grid">
        {/* left column */}
        <section className="stack">
          <Card title="Personal Information">
            <dl className="info-grid">
              <InfoRow label="ID Number" value={client?.idNumber} />
              <InfoRow
                label="Date of Birth"
                value={
                  client?.dateOfBirth ? `${fmt(client.dateOfBirth)}` : null
                }
              />
              <InfoRow label="Gender" value={client?.gender} />
              <InfoRow label="Doctor" value={client?.doctor || "-"} />
              <InfoRow label="Mobility" value={client?.mobility} />
              <InfoRow label="Insurance" value={client?.insurance || "-"} />
              <InfoRow label="Details" value={client?.details} full />
              {client?.expiryDate && (
                <InfoRow
                  label="Expiry Date"
                  value={
                    <>
                      {fmt(client.expiry)}{" "}
                      <span
                        className={`badge ${
                          expiryBadge(client.expiryDate).cls
                        }`}
                        style={{ marginLeft: 6 }}
                      >
                        {expiryBadge(client.expiryDate).text}
                      </span>
                    </>
                  }
                  full
                />
              )}
            </dl>
          </Card>

          <Card
            title="Documents"
            right={<span className="muted">Uploaded in Intake</span>}
          >
            <div className="docs-grid">
              <DocumentTile
                kind="Client ID"
                doc={client?.documents?.idCard}
                onReupload={onReuploadIdCard}
              />
              <DocumentTile
                kind="SVB Insurance Card"
                doc={client?.documents?.svbCard}
                onReupload={onReuploadSvbCard}
              />
            </div>
          </Card>
        </section>

        {/* right column */}
        <aside className="stack">
          <Card title="Notes">
            <p className="muted">{client?.notes || "No notes yet"}</p>
          </Card>
        </aside>
      </div>
    </div>
  );
}
