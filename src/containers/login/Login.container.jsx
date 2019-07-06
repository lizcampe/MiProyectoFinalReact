import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Redirect } from "react-router-dom/";

//functions
import { FirebaseContext } from "../../firebase/index";

// Actions
import { getDataWithQuery } from "../../utils/api.utils";
import storage from "../../utils/storage.utils";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import "./Login.css";

function Login(props) {
  const { firebase, user } = useContext(FirebaseContext);
  const [contact, setContact] = useState({
    email: "",
    password: ""
  });

  const { email, password } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    console.log(email, password);
    firebase.login(email, password);
    console.log(user);
  };

  const handleLogout = () => {
    console.log("Logout", user);
    firebase.logout();
  };
  return (
    <div className="body">
      <form onSubmit={handleOnSubmit} id="centro">
        <input
          className="Username"
          type="text"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={email}
          id="Rectangle-20"
          type="email"
        />
        <input
          className="Password"
          type="password"
          id="Rectangle-20"
          placeholder="Password"
          name="password"
          onChange={onChange}
          value={password}
        />
        <input type="submit" value="Login" className="Search-Container" />

        <button id="peque" className="Forgot-your-password">
          <Link to="/forgot">Forgot your password?</Link>
        </button>
      </form>
    </div>
  );
}

/*
return (
  <form id="centro">
    <br />
    <div className="body">
      <p className="Username"> Username </p>
      <input
        className="Rectangle-20"
        type="email"
        name="E-mail"
        value={this.state.username}
        onChange={this.updateUsername}
        isInvalid={!this.state.usernameValid}
      />
    </div>
    <br />
    <div>
      <p className="Password"> Password </p>
      <input
        className="Rectangle-20"
        type="password"
        name="Username"
        value={this.state.password}
        onChange={this.updatePassword}
        isInvalid={!this.state.passwordValid}
      />
    </div>
    <br />

    <div>
      <button
        className="Search-Container"
        type="submit"
        onClick={this.logIn}
        name="Login"
      >
        <a class="send">LOG IN</a>{" "}
      </button>
      <br /> {alert}
      <a className="Forgot-your-password" type="link" id="peque" href="/Forgot">
        {" "}
        Forgot your password?
      </a>
    </div>
  </form>
);

/*
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: false,
      loggedIn: false,
      usernameValid: true,
      passwordValid: true
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  updateUsername({ target }) {
    this.setState({ username: target.value, loginError: false });
  }

  updatePassword({ target }) {
    this.setState({ password: target.value, loginError: false });
  }

  checkUser(userData) {
    if (userData && userData.length) {
      storage.store("user", userData[0]);
      this.setState({ loggedIn: true });
      // console.log(storage.retreive('user'));
    } else {
      this.setState({ loginError: true });
    }
  }

  async logIn() {
    await firebase;
  }


 {
    const usernameValidation = Yup.string()
      .required()
      .isValid(this.state.username);
    const passwordValidation = Yup.string()
      .required()
      .isValid(this.state.password);
    Promise.all([usernameValidation, passwordValidation]).then(
      ([usernameValid, passwordValid]) => {
        this.setState({ usernameValid, passwordValid });
        if (usernameValid && passwordValid) {
          getDataWithQuery("users", { ...this.state }).then(this.checkUser);
        }
      }
    );
  }

  render() {
    //para los errores
    let alert = null;
    if (this.state.loggedIn) {
      return <Redirect to="/list" />;
    }
    if (this.state.loginError) {
      alert = <Alert variant="danger">Check password or username!</Alert>;
    }

    return (
      <form id="centro">
        <br />
        <div className="body">
          <p className="Username"> Username </p>
          <input
            className="Rectangle-20"
            type="email"
            name="E-mail"
            value={this.state.username}
            onChange={this.updateUsername}
            isInvalid={!this.state.usernameValid}
          />
        </div>
        <br />
        <div>
          <p className="Password"> Password </p>
          <input
            className="Rectangle-20"
            type="password"
            name="Username"
            value={this.state.password}
            onChange={this.updatePassword}
            isInvalid={!this.state.passwordValid}
          />
        </div>
        <br />

        <div>
          <button
            className="Search-Container"
            type="submit"
            onClick={this.logIn}
            name="Login"
          >
            <a class="send">LOG IN</a>{" "}
          </button>
          <br /> {alert}
          <a
            className="Forgot-your-password"
            type="link"
            id="peque"
            href="/Forgot"
          >
            {" "}
            Forgot your password?
          </a>
        </div>
      </form>
    );
  }
}
*/
export default Login;
