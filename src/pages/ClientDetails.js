import React from "react";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ClientDetails.css";

// Mock client data (keep for now, replace with API later)
const clients = [
  {
    id: 1,
    name: "John Doe",
    idNumber: "198721717",
    address: "Maria 16",
    email: "john@example.com",
    phone: "123-4567",
    dateOfBirth: "02/10/24",
    gender: "Male",
    doctor: "Wanner",
    mobility: "Laying in bed",
    insurance: "SVB",
    details: "Welcome to Fundashon Transhende",
  },
  {
    id: 2,
    name: "Karel Sint Jago",
    idNumber: "213312123",
    address: "Tera 42",
    email: "karel@example.com",
    phone: "754-6543",
    dateOfBirth: "02/10/24",
    gender: "Other",
    doctor: "Wanner",
    mobility: "Laying in bed",
    insurance: "SVB",
    details: "Welcome to Fundashon Transhende",
    expiryDate: "09/25/25",
  },
  {
    id: 3,
    name: "Karina Smith",
    idNumber: "232131231",
    address: "Hato 34",
    email: "karina@example.com",
    phone: "454-6543",
    dateOfBirth: "02/10/24",
    gender: "Female",
    doctor: "Wanner",
    mobility: "Laying in bed",
    insurance: "SVB",
    details: "Welcome to Fundashon Transhende",
  },
  {
    id: 4,
    name: "Justin Smith",
    idNumber: "123224431",
    address: "Barber 44",
    email: "justin@example.com",
    phone: "231-6543",
    dateOfBirth: "02/10/24",
    gender: "Male",
    doctor: "Wanner",
    mobility: "Laying in bed",
    insurance: "SVB",
    details: "Welcome to Fundashon Transhende",
  },
  {
    id: 5,
    name: "Kevin Smith",
    idNumber: "623728191",
    address: "Souax 53",
    email: "jane@example.com",
    phone: "343-6543",
    dateOfBirth: "02/10/24",
    gender: "Other",
    doctor: "Wanner",
    mobility: "Laying in bed",
    insurance: "SVB",
    details: "Welcome to Fundashon Transhende",
  },
];

function daysUntil(dateString) {
  if (!dateString) return null;
  const today = new Date();
  const expiry = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  expiry.setHours(0, 0, 0, 0);

  const diffTime = expiry - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function ClientDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const clientData =
    location.state?.client || clients.find((c) => c.id === Number(id));

  const [client, setClient] = useState(clientData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setClient((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSave = () => {
    console.log("Saving client:", client);
    setIsDrawerOpen(false);
  };

  if (!clientData) {
    return (
      <div>
        <Navbar />
        <div className="client-page">
          <h2>Client not found</h2>
          <button onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="client-page">
        {/* Header */}
        <div className="client-page__header">
          <div className="client-page__title">
            <button className="link link--back" onClick={() => navigate(-1)}>
              ← Back to Clients
            </button>
            <h1>{clientData.name}</h1>
            <div className="meta">
              <span className="meta__id">ID: {clientData.id}</span>
              <span className="dot" />
              <span className="badge badge--ok">Active</span>
              {clientData.expiryDate && (
                <p>
                  Insurance valid: {clientData.expiryDate} (
                  {() => {
                    const days = daysUntil(clientData.expiryDate);
                    return days > 0
                      ? `${days} days left`
                      : `Expired ${Math.abs(days)} days ago`;
                  }}
                  )
                </p>
              )}
            </div>
          </div>

          <div className="client-page__actions">
            <button
              className="btn btn--primary"
              onClick={() => setIsDrawerOpen(true)}
            >
              Edit
            </button>
            <button className="btn btn--outline">Export PDF</button>
            <button className="btn btn--danger">Deactivate</button>
          </div>
        </div>

        {/* Summary section */}
        <section className="summary">
          <article className="card">
            <h2 className="card__title">Contact</h2>
            <div className="card__body">
              <div className="kv">
                <span>Email</span>
                <strong>{client.email}</strong>
              </div>
              <div className="kv">
                <span>Phone</span>
                <strong>{client.phone}</strong>
              </div>
              <div className="kv">
                <span>Address</span>
                <strong>{client.address}</strong>
              </div>
            </div>
          </article>

          <article className="card">
            <h2 className="card__title">Flags</h2>
            <div className="card__body tags">
              <span className="muted">None</span>
            </div>
          </article>
        </section>

        {/* Main two-column layout */}
        <div className="columns">
          <section className="col col--main">
            <article className="card">
              <h2 className="card__title">Personal Information</h2>
              <dl className="info-grid">
                <div className="info">
                  <dt>ID Number</dt>
                  <dd>{client.idNumber}</dd>
                  <dt>Date of Birth</dt>
                  <dd>{client.dateOfBirth}</dd>
                  <dt>Gender</dt>
                  <dd>{client.gender}</dd>
                  <dt>Doctor</dt>
                  <dd>{client.doctor}</dd>
                  <dt>Mobility</dt>
                  <dd>{client.mobility}</dd>
                  <dt>Insurance</dt>
                  <dd>{client.insurance}</dd>
                  <dt>Details</dt>
                  <dd>{client.details}</dd>
                  <dt>Expiry Date</dt>
                  <dd>
                    {client.expiryDate ? (
                      <>
                        {client.expiryDate}{" "}
                        <span
                          className={
                            daysUntil(client.expiryDate) > 0
                              ? "valid"
                              : "expired"
                          }
                        >
                          (
                          {daysUntil(client.expiryDate) > 0
                            ? `${daysUntil(client.expiryDate)} days left`
                            : `Expired ${Math.abs(
                                daysUntil(client.expiryDate)
                              )} days ago`}
                          )
                        </span>
                      </>
                    ) : (
                      <span className="muted">Not provided</span>
                    )}
                  </dd>
                </div>
              </dl>
            </article>
          </section>

          <aside className="col col--side">
            <article className="card">
              <h2 className="card__title">Notes</h2>
              <div className="notes">
                <p className="muted">No notes yet</p>
              </div>
            </article>
          </aside>
        </div>

        <div className="footer">
          <span className="muted">Last updated: 2 September 2025</span>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="drawer-overlay">
          <div className="drawer">
            {/* Drawer Header */}
            <div className="drawer__header">
              <h2>Edit Client</h2>
              <button
                className="drawer__close"
                onClick={() => setIsDrawerOpen(false)}
              >
                X
              </button>
            </div>

            {/* Form */}
            <div className="drawer__form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={client.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={client.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Insurance Expiry</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={client.expiryDate || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Upload File</label>
                <input type="file" name="document" onChange={handleChange} />
                {client.document && (
                  <div className="file-preview">
                    <span>{client.document.name}</span>
                    <button
                      type="button"
                      className="remove-file"
                      onClick={() =>
                        setClient((prev) => ({ ...prev, document: null }))
                      }
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="drawer__actions">
              <button
                className="btn btn--outline"
                onClick={() => setIsDrawerOpen(false)}
              >
                Cancel
              </button>
              <button className="btn btn--primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
