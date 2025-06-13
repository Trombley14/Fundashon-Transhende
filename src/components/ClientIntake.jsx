function ClientIntake() {
  return (
    <>
      <div className="page-container">
        <form className="intake-form">
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
          <label htmlFor="district">District:</label>
          <input type="text" id="district" name="district" required />
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
            <option value="">option 2</option>
            <option value="">option 3</option>
          </select>

          <label htmlFor="insurance">Insurance:</label>
          <select id="insurance" name="insurance" required>
            <option value="">-- Please choose an option --</option>
            <option value="svb">SVB</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>

          <label htmlFor="expiry_date">Expiry date:</label>
          <input type="date" id="expiry_date" name="expiry_date" required />

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
