import React from "react";
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

export default function ClientDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const client =
    location.state?.client || clients.find((c) => c.id === Number(id));

  if (!client) {
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
            <h1>{client.name}</h1>
            <div className="meta">
              <span className="meta__id">ID: {client.id}</span>
              <span className="dot" />
              <span className="badge badge--ok">Active</span>
            </div>
          </div>

          <div className="client-page__actions">
            <button className="btn btn--primary">Edit</button>
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
    </div>
  );
}
