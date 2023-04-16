import React, { useEffect, useState } from "react";

const DisplayFormData = (props) => {

  const [formdata, setFormData] =  useState(null)
  
  const back = () =>{
    props.sendDisplay(false)
  }

  return (
    <div>
      <div>
      <p>Full name: {props.data.fullname}</p>
      <p>date: {props.data.date}</p>
      <p>gender: {props.data.gender}</p>
      <p>email: {props.data.email}</p>
      <p>Phone number: {props.data.phonenumber}</p>
      <p>university: {props.data.university}</p>
      <p>adress: {props.data.address}</p>
      <p>course name: {props.data.coursename}</p>
      <p>year of passing : {props.data.yop}</p>
      <p>rollno: {props.data.rollno}</p>
      <p>job title: {props.data.jobtitle}</p>
      <p>company name: {props.data.companyname}</p>
      </div>
      <button onClick={back}>Back</button>
    </div>
  );
};

export default DisplayFormData;
