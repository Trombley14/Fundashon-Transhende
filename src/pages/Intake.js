import { useState } from "react";
import Navbar from "../components/Navbar";
import ClientIntake from "../components/ClientIntake";
import CompanyIntake from "../components/CompanyIntake";

function Intake() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    district: "",
    telephone1: "",
    telephone2: "",
    doctor: "",
    mobility: "",
    insurance: "",
    expiry_date: "",
    details: "",
    contact_person1: "",
    contact_person_telephone1: "",
    contact_person2: "",
    contact_person_telephone2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const msg = await res.text();
      alert(msg);
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Failed to submit");
    }
  };

  return (
    <>
      <Navbar />
      <ClientIntake />
      <CompanyIntake />
    </>
  );
}

export default Intake;
