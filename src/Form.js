import React, {useRef} from "react";

const Form = (props) => {
  
  const fullnameRef = useRef();
  const dateref = useRef();
  const genderref = useRef();
  const emailref = useRef();
  const phonenumberref = useRef();
  const universityref = useRef();
  const addressref = useRef();
  const coursenameref = useRef();
  const yopref = useRef();
  const rollnoref = useRef();
  const jobtitleref = useRef();
  const companynameref = useRef();
  
  const onSubmitHandler = (event) => {
    event.preventDefault();


    const data = {
      fullname: fullnameRef.current.value,
      date: dateref.current.value,
      gender: genderref.current.value,
      email: emailref.current.value,
      phonenumber: phonenumberref.current.value,
      university: universityref.current.value,
      address: addressref.current.value,
      coursename: coursenameref.current.value,
      yop: yopref.current.value,
      rollno: rollnoref.current.value,
      jobtitle: jobtitleref.current.value,
      companyname: companynameref.current.value,
    };

    props.sendFormData(data, true)

  };

  return (
    <div>
      <div className="container">
        <h1>Alumni and Student Information Registration Form</h1>
        <form onSubmit={onSubmitHandler}>
          <h2>Personal Information</h2>
          <div className="form-group">
            <label for="full-name">Full Name</label>
            <input
              ref={fullnameRef}
              type="text"
              name="full-name"
              id="full-name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="dob">Date of Birth</label>
            <input
              ref={dateref}
              type="date"
              name="dob"
              id="dob"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="gender">Gender</label>
            <select
              ref={genderref}
              name="gender"
              id="gender"
              className="form-control"
              required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              ref={emailref}
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="phone">Phone Number</label>
            <input
              ref={phonenumberref}
              type="tel"
              name="phone"
              id="phone"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="address">Permanent Address</label>
            <textarea
              ref={addressref}
              name="address"
              id="address"
              className="form-control"
              rows="3"
              required></textarea>
          </div>
          <h2>Educational Information</h2>
          <div className="form-group">
            <label for="degree">Course Name</label>
            <input
              ref={coursenameref}
              type="text"
              name="degree"
              id="degree"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="passing-year">Year of Passing</label>
            <input
              ref={yopref}
              type="number"
              name="passing-year"
              id="passing-year"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="university">University</label>
            <input
              ref={universityref}
              type="text"
              name="university"
              id="university"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="roll-number">Roll Number</label>
            <input
              ref={rollnoref}
              type="text"
              name="roll-number"
              id="roll-number"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="occupation">Current Occupation/Job Title</label>
            <input
              ref={jobtitleref}
              type="text"
              name="occupation"
              id="occupation"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label for="company">Company Name</label>
            <input
              ref={companynameref}
              type="text"
              name="company"
              id="occupation"
              className="form-control"
              required
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
