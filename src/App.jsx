import { useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [style, setStyle] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current == true) {
      firstRender.current = false;
      return;
    }
    setLoginOrRegister((prev) => !prev);
  }, [style]);
  useEffect(() => {
    // console.log(loginOrRegister);
  }, [loginOrRegister]);

  return (
    <div>
      <div className="container">
        <div className={`${!style ? "form" : "form transformation-form "}`}>
          <h1 className="title">Sign in</h1>
          <div className="icons">
            <span>
              <i className="fa-brands fa-facebook" />
            </span>
            <span>
              <i className="fa-brands fa-square-google-plus" />
            </span>
            <span>
              <i className="fa-brands fa-square-github" />
            </span>
            <span>
              <i className="fa-brands fa-linkedin" />
            </span>
          </div>
          <p>or use your Email and password</p>
          <form>
            <div className={`in-name ${!style ? "hidden" : ""} `}>
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="password" />
            </div>
            <p>Forget Your Password?</p>
            <button type="submit" className="title">
              Sign in
            </button>
          </form>
        </div>
        <div className={`left ${!style ? "left" : "left transformation"}`}>
          <h1>Hello,</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur.</p>
          <button
            onClick={() => {
              setStyle((prev) => !prev);
            }}
            className="next"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
