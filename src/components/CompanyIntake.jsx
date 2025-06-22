function CompanyIntake() {
  return (
    <>
      <div className="page-container">
        <form className="intake-form">
          <h1>Company Intake</h1>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="company_name">Company Name</label>
              <input
                type="text"
                id="company_name"
                placeholder="Company name"
                name="company_name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="kvk_number">KVK Number</label>
              <input type="number" id="kvk_number" name="kvk_number" required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="contact_person">Contact Person</label>
              <input
                type="text"
                id="contact_person"
                placeholder="Name"
                name="contact_person"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="position">Position/Title</label>
              <input type="text" id="position" name="position" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="telephone">Telephone</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
            <div className="input-group">
              <label htmlFor="email_address">Email Address</label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="input-group">
              <label htmlFor="district">District</label>
              <input type="text" id="district" name="district" required />
            </div>
          </div>

          <label htmlFor="start_date">Start date:</label>
          <input type="date" id="start_date" name="start_date" required />

          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CompanyIntake;
