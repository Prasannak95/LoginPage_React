import { useState } from "react";

const AuthForm = () => {
  const [isLoggin, setIsLoggin] = useState(true);
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLoggin ? "active" : ""}
              onClick={() => setIsLoggin(true)}
            >
              Login
            </button>
            <button
              className={!isLoggin ? "active" : ""}
              onClick={() => setIsLoggin(false)}
            >
              Signup
            </button>
          </div>

          {isLoggin ? (
            <>
              <div className="form">
                <h2>Login Form</h2>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <a href="">Forgot password</a>
                <button>Login</button>
                <p>
                  Not a member?{" "}
                  <a href="" onClick={() => setIsLoggin(false)}>
                    Sign up now?
                  </a>{" "}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="form">
                <h2>Signup form</h2>
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign up</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default AuthForm;
