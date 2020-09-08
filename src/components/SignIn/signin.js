import React, { Component } from "react";
import Button from "../forms/Button/button";
import { signInWithGoogle } from "./../../firebase/utils";

import "./signin.styles.scss";

class SignIn extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signin">
        <div className="wrapper">
          <h2>Log In</h2>
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
              <div className="social-sign-in">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign In with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
