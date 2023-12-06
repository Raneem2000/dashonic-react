import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { LOGIN, baseUrl } from "../../../Api/Api";
import Loading from "../../../components/Loading/Loading";
import Cookie from "cookie-universal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function Login() {
  //Ref
  const focus = useRef("");
  useEffect(() => {
    focus.current.focus();
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();

  //Cookie
  const cookie = Cookie();

  //loading
  const [loading, setLoading] = useState(false);

  //err
  const [err, setErr] = useState("");

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/${LOGIN}`, form);
      setLoading(false);
      const token = res.data.token;
      const role = res.data.user.role;
      const go = role === "1995" ? "users" : "writer";
      cookie.set("e-commerce", token);
      window.location.pathname = `/dashboard/${go}`;
    } catch (err) {
      setLoading(false);
      console.log(err);
      if (err.response.status === 401) {
        setErr("Email OR Password not Right");
      } else {
        setErr("Internal server ERR");
      }
    }
  }
  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div className="row" style={{ height: "100vh" }}>
          <Form className="form" onSubmit={handleSubmit}>
            <div className="custom-form">
              <h1>Log In </h1>
              <Form.Group
                className="my-form-control"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email..."
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                  ref={focus}
                />
                <Form.Label>Email:</Form.Label>
              </Form.Group>

              <Form.Group
                className="my-form-control"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password..."
                  name="password"
                  value={form.password}
                  onChange={handleFormChange}
                  minLength={6}
                  required
                />
                <Form.Label>Password:</Form.Label>
              </Form.Group>

              <button className="button button-primary">Log in</button>
              <div className="google-btn">
                <a href={`http://127.0.0.1:8000/login-google`}>
                  <div className="google-icon-wrapper">
                    <img
                      className="google-icon"
                      src="https://th.bing.com/th?id=OIP.Din44az7iZZDfbsrD1kfGQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt="log in with google"
                    />
                  </div>
                  <p className="btn-text">
                    <b>log in with google</b>
                  </p>
                </a>
              </div>
              {err !== "" && <span className="error">{err}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
