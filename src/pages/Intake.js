import Navbar from "../components/Navbar";

function Intake() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <form className="intake-form">
          <h1>Intake</h1>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first-name"> First name:</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last name:</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="date-of-birth">Date of birth:</label>
              <input
                type="date"
                id="date-of-birth"
                name="date-of-birth"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="">-- Please choose an option --</option>
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

          <label htmlFor="expiry-date">Expiry date:</label>
          <input type="date" id="expiry-date" name="expiry-date" required />

          <label htmlFor="details">Details:</label>
          <textarea id="details" name="details" rows="4" />

          <h3>Contact Person Information</h3>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="contact-person1">Contact person (1):</label>
              <input
                type="text"
                id="contact-person1"
                name="contact-person1"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="telephone">Telephone:</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="contact-person2">contact person (2):</label>
              <input
                type="text"
                id="contact-person2"
                name="contact-person2"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="telephone">Telephone:</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Intake;
