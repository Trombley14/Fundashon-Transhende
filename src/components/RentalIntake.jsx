function RentalIntake() {
  return (
    <>
      <div className="page-container">
        <form className="intake-form">
          <h1>Bus Rental Intake</h1>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="rental_type">Rental Type</label>
              <select name="rental_type" id="rental_type" required>
                <option value="">-- Please choose an option --</option>
                <option value="internal">Internal</option>
                <option value="external">External</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="renter">Name of Renter</label>
              <input
                type="text"
                id="renter"
                name="renter"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="id">Id:</label>
              <input type="number" id="id" name="id" required />
            </div>
            <div className="input-group">
              <label htmlFor="telephone_number">Telephone number:</label>
              <input
                type="tel"
                id="telephone_number"
                name="telephone_number"
                required
              />
            </div>
          </div>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
          />

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="company_name">Company Name</label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="date_of_request">Date of Request</label>
              <input type="date" id="date_of_request" name="date_of_request" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group"></div>
          </div>

          <label htmlFor="purpose_of_rental">Purpose of Rental</label>
          <textarea id="purpose_of_rental" name="purpose_of_rental" required />

          <label htmlFor="number_of_passengers_expected">
            Number of passengers Expected
          </label>
          <input
            type="number"
            id="number_of_passengers_expected"
            name="number_of_passengers_expected"
            required
          />

          <label htmlFor="location_of_use">Location(s) of Use</label>
          <input
            type="text"
            id="location_of_use"
            name="location_of_use"
            required
          />
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="distance_limit">
                Distance Limit/Route Approval
              </label>
              <input
                type="text"
                id="distance_limit"
                name="distance_limit"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="approved_by">Approved By</label>
              <input type="text" id="approved_by" name="approved_by" required />
            </div>
          </div>
          <label htmlFor="notes">Notes/Conditions of Use</label>
          <textarea id="notes" name="notes" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RentalIntake;
