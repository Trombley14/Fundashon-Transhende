import { useState } from "react";
import ClientIntake from "../components/ClientIntake";
import CompanyIntake from "../components/CompanyIntake";
import RentalIntake from "../components/RentalIntake";

function FormSelector() {
  const [selectedForm, setSelectedForm] = useState("");

  const renderForm = () => {
    switch (selectedForm) {
      case "client":
        return <ClientIntake />;
      case "company":
        return <CompanyIntake />;
      case "rental":
        return <RentalIntake />;
      default:
        return <p>Please choose a form to get started</p>;
    }
  };

  return (
    <>
      <div className="form-selector">
        <h1>Choose a Form</h1>
        <select
          value={selectedForm}
          onChange={(e) => setSelectedForm(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="client">Client Intake</option>
          <option value="company">Company Intake</option>
          <option value="rental">Rental Intake</option>
        </select>
      </div>
      <div className="form-display">{renderForm()}</div>
    </>
  );
}

export default FormSelector;
