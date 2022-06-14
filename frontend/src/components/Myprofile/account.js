import axios from "axios";
import React, { useEffect, useState } from "react";

function Account() {


  const [userid, setID] = useState("surya")
  const [email,setEmail] = useState("surya")
  const [username,setUsername] = useState("surya")
  useEffect(() => {
    axios
      .get("/api/profile")
      .then((res) => {
        console.log(res.data);
        const {_id, email, username} = res.data
        setID(_id)
        setEmail(email)
        setUsername(username)
        // userid = res.data._id
        // email = res.data.email;
        // username = res.data.username;

        // setEmail(res.data.email);
        // setUserName(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="card" style={{width:"25rem"}}>
      <img
        src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
        <p class="card-text">
          <p className=" fw-bold">UserId : </p>{userid}
          <p className="fw-bold">Username : </p>{username}
          <p className="fw-bold">Email : </p>{email}
        </p>
        b5
      </div>
    </div>
  );
}

export default Account;
