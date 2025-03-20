import { useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [style, setStyle] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const firstRender = useRef(true);
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  useEffect(() => {
    if (firstRender.current == true) {
      firstRender.current = false;
      return;
    }
    setLoginOrRegister((prev) => !prev);
    inp1.current.value = "";
    inp2.current.value = "";
    inp3.current.value = "";
  }, [style]);
  useEffect(() => {
    // console.log(loginOrRegister);
  }, [loginOrRegister]);

  return (
    <div>
      <div className="container">
        <div className={`${!style ? "form" : "form transformation-form "}`}>
          <h1 className="title"> {!style ? "Sign in" : " Sign up"}</h1>
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
              <input ref={inp1} type="text" placeholder="Name" />
            </div>
            <div>
              <input ref={inp2} type="text" placeholder="Email" />
            </div>
            <div>
              <input ref={inp3} type="password" placeholder="Password" />
            </div>
            <p>Forget Your Password?</p>
            <button type="submit" className="title">
              {!style ? "Sign in" : " Sign up"}
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
            {!style ? "Sign up" : " Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
