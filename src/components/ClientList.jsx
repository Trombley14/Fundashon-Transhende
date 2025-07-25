import React from "react";
import { useNavigate } from "react-router-dom";

const clients = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-4567",
  },
  {
    id: 2,
    name: "Karel Sint Jago",
    email: "karel@example.com",
    phone: "754-6543",
  },
  {
    id: 3,
    name: "Karina Smith",
    email: "karina@example.com",
    phone: "454-6543",
  },
  {
    id: 4,
    name: "Justin Smith",
    email: "justin@example.com",
    phone: "231-6543",
  },
  { id: 5, name: "Kevin Smith", email: "jane@example.com", phone: "343-6543" },
];

function CLientList() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="client-table-container">
        <h2>Client Records</h2>
        <table className="client-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button onClick={() => navigate(`/clients/${client.id}`)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CLientList;
