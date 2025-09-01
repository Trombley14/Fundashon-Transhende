import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

function ClientList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (client) => {
    navigate(`/client/${client.id}`, { state: { client } });
  };

  return (
    <div className="main-content">
      <div className="client-table-container">
        <h2>Client Records</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        />
        <table className="client-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Adress</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr onClick={() => handleRowClick(client)} key={client.id}>
                <td>{client.name}</td>
                <td>{client.idNumber}</td>
                <td>{client.address}</td>
                <td>{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientList;
