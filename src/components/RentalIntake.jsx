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
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="department">Department/Role</label>
              <select name="department" id="department" required>
                <option value="">-- Please choose an option --</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="date_of_request">Date of Request</label>
              <input type="date" id="date_of_request" name="date_of_request" />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="rental_date">Rental Date(s)</label>
              <input type="date" id="rental_date" name="rental_date" required />
            </div>
            <div className="input-group">
              <label htmlFor="pick_up_and_return_time">
                Pick-up & Return Time
              </label>
              <input
                type="datetime-local"
                id="pick_up_and_return_time"
                name="pick_up_and_return_time"
                required
              />
            </div>
          </div>
          <label htmlFor="bus_number">Bus Number/Unit</label>
          <input type="number" id="bus_number" name="bus_number" required />
          <label htmlFor="purpose_of_rental">Purpose of Rental</label>
          <textarea id="purpose_of_rental" name="purpose_of_rental" required />
          <label htmlFor="number_of_people_expected">
            Number of People Expected
          </label>
          <input
            type="number"
            id="number_of_people_expected"
            name="number_of_people_expected"
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
