import { useState } from "react";

function ClientIntake() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // collect data from the form
    const form = e.target;
    const clientData = {
      firstName: form.first_name.value,
      lastName: form.last_name.value,
      dateOfBirth: form.date_of_birth.value,
      gender: form.gender.value,
      idNumber: form.id.value,
      district: form.district.value,
      address: form.Address.value,
      phone1: form.telephone1.value,
      phone2: form.telephone2.value,
      doctor: form.doctor.value,
      mobility: form.mobility.value,
      insurance: form.insurance.value,
      expiryDate: form.expiry_date.value,
      startDate: form.start_date.value,
      details: form.details.value,
      contactPerson1: form.contact_person1.value,
      contactPhone1: form.contact_person_telephone1.value,
      contactPerson2: form.contact_person2.value,
      contactPhone2: form.contact_person_telephone2.value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Client saved successfully!");
        console.log("Saved:", data);
        form.reset();
        setFile(null);
        setPreview(null);
      } else {
        alert(data.message || "Failed to save client");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Create Preview
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      setPreview(fileUrl);
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  // const handleRemoveFile = () => {
  //   setFile(null);
  //   setPreview(null);

  //   document.getElementById("fileInput").value = "";
  // };

  return (
    <>
      <div className="page-container">
        <form className="intake-form" onSubmit={handleSubmit}>
          <h1>Client Intake</h1>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first_name"> First name:</label>
              <input
                type="text"
                id="first_name"
                placeholder="First name"
                name="first_name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="last_name">Last name:</label>
              <input
                type="text"
                id="last_name"
                placeholder="Last name"
                name="last_name"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date_of_birth">Date of birth:</label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="">-- Choose a gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" name="id" required />

          <label htmlFor="file">Upload file:</label>
          <input
            id="upload"
            type="file"
            onChange={handleFileChange}
            accept="image/*,application/pdf"
          />
          {preview && (
            <div>
              <p>Preview:</p>
              <img src={preview} alt="preview" width="200px" />
            </div>
          )}

          <label htmlFor="district">District:</label>
          <input type="text" id="district" name="district" required />

          <label htmlFor="Address">Address:</label>
          <input type="text" id="Address" name="Address" required />

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="telephone1">Telephone (1):</label>
              <input type="tel" id="telephone1" name="telephone1" required />
            </div>
            <div className="input-group">
              <label htmlFor="telephone2">Telephone (2):</label>
              <input type="tel" id="telephone2" name="telephone2" />
            </div>
          </div>

          <label htmlFor="doctor">Doctor:</label>
          <input type="text" id="doctor" name="doctor" required />

          <label htmlFor="mobility">Mobility:</label>
          <select id="mobility" name="mobility" required>
            <option value="">-- Please choose an option --</option>
            <option value="laying-in-bed">Laying in bed</option>
            <option value="walking">Walking</option>
            <option value="walking-badly">Walking badly</option>
            <option value="mobility-aid">Mobility aid</option>
            <option value="wheelchair">Wheelchair</option>
          </select>

          <label htmlFor="insurance">Insurance:</label>
          <select id="insurance" name="insurance" required>
            <option value="">-- Please choose an option --</option>
            <option value="svb">SVB</option>
            <option value="bvz">BVZ</option>
            <option value="avbz">AVBZ</option>
            <option value="particulier">Particulier</option>
            <option value="eigen-beheer">Eigen beheer</option>
          </select>

          <label htmlFor="expiry_date">Expiry date:</label>
          <input type="date" id="expiry_date" name="expiry_date" required />

          <label htmlFor="start_date">Start Date:</label>
          <input type="date" id="start_date" name="start_date" required />

          <label htmlFor="details">Details:</label>
          <textarea id="details" name="details" rows="4" />

          <h3>Contact Person Information</h3>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="contact_person1">Contact person (1):</label>
              <input
                type="text"
                id="contact_person1"
                name="contact_person1"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="contact_person_telephone1">Telephone:</label>
              <input
                type="tel"
                id="contact_person_telephone1"
                name="contact_person_telephone1"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="contact_person2">Contact person (2):</label>
              <input type="text" id="contact_person2" name="contact_person2" />
            </div>
            <div className="input-group">
              <label htmlFor="contact_person_telephone2">Telephone:</label>
              <input
                type="tel"
                id="contact_person_telephone2"
                name="contact_person_telephone2"
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ClientIntake;
