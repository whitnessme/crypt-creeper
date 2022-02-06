import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage({ userTypeId }) {

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [company, setCompany] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [showConfirm, setShowConfirm] = useState(false);

  let title;

  useEffect(() => {
    if (userTypeId === "1") setCompany("n/a")
    if (userTypeId === "2") setCompany("")
    setErrors([])
  }, [userTypeId])

  if (sessionUser) return <Redirect to="/" />;

  if (userTypeId === "1") {
    title = "Join CryptSeeker"
  } else if (userTypeId === "2") {
    title = "Let Seekers stay at your Crypt!"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      console.log(parseInt(userTypeId, 10))
      return dispatch(sessionActions.signup({ email, username, password, firstName, lastName, company, userTypeId: parseInt(userTypeId, 10) }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            if (data.errors)
            setErrors(data.errors);
          }
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form
    className="signup-form"
    onSubmit={handleSubmit}>
      <h2>
        {title}
      </h2>
      {errors.length > 0 && 
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>}

        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          // required
        />
        
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

      {userTypeId === "2" &&
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
      }

        <input
          type="text"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          // required
        />

        <input
          type="password"
          value={password}
          placeholder="Create a Password"
          // onClick={() => setShowConfirm(true)}
          onChange={(e) => {
            setPassword(e.target.value)
            setShowConfirm(true)
          }}
          // required
        />
        
        {showConfirm &&
        <input
        type="password"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        // required
        />
      }

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;