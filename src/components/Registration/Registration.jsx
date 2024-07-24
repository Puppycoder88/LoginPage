import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Registration({ toggleForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Fname:", fname);
    console.log("Lname:", lname);
    console.log("Email:", email);
    console.log("Number:", number);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Pincode:", pincode);
    console.log("State:", state);
    console.log("Password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Create Account</h2>
      <p>Please fill in the form to create an account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="registerFname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="registerFname"
            aria-describedby="fnameHelp"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerLname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="registerLname"
            aria-describedby="lnameHelp"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerContact" className="form-label">
            Contact
          </label>
          <input
            type="number"
            className="form-control"
            id="registerContact"
            aria-describedby="numberHelp"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="registerAddress"
            aria-describedby="addressHelp"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="registerCity"
            aria-describedby="cityHelp"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerPincode" className="form-label">
            Pincode
          </label>
          <input
            type="number"
            className="form-control"
            id="registerPincode"
            aria-describedby="pincodeHelp"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerState" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="registerState"
            aria-describedby="stateHelp"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword" className="form-label">
            Password
          </label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="registerPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash className="input-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaRegEye className="input-icon" onClick={togglePasswordVisibility} />
            )}
          </div>
        </div>
        <div className="form-submit">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <span>Already have an account?</span>
          <a href="#" onClick={toggleForm}>
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
}

export default Registration;
