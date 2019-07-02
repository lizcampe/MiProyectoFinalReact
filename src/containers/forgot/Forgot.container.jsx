import React, { Component } from "react";
import { Redirect } from "react-router-dom/";

// Actions
import storage from "../../utils/storage.utils";
import help from "../../shared/media/help.png";
import "./Forgot.css";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValid: true
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.checkMail = this.checkMail.bind(this);
  }

  updateEmail({ target }) {
    this.setState({ email: target.value, loginError: false });
  }

  checkMail(userMail) {
    if (userMail && userMail.length) {
      storage.store("user", userMail[0]);
      this.setState({ loggedIn: true });
      // console.log(storage.retreive('user'));
    } else {
      this.setState({ loginError: true });
    }
  }

  render() {
    //para los errores

    return (
      <form Id="centro">
        <br />
        <div>
          <img src={help} className="help" />
        </div>
        <div>
          <a className="Forgot-your-password2">Forgot your password? </a>
          <br />
          <p className="lost">
            {" "}
            Enter the email associated with your account:{" "}
          </p>
          <br />
          <input className="passlost" type="email" name="E-mail" />
        </div>
        <br />
        <button className="Search-Container" type="submit" name="Send">
          {" "}
          <a className="send">Send</a>{" "}
        </button>
        <br />
        <p className="Agree" Id="peque">
          We have sent you a reset password link on your registered email
          address.
        </p>
        <br />
        <a className="return-to-login" Id="peque" href="/">
          Return to login{" "}
        </a>
      </form>
    );
  }
}

export default Forgot;
