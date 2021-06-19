import React, {useEffect} from "react";
import './assets/scss/App.scss';
import {Route, Switch, useHistory} from "react-router-dom";

import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Skills from "./pages/Skills";

function App() {
  const history = useHistory();

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "0":
        history.push("/");
        break;
      case "1":
        history.push("/about-me");
        break;
      case "2":
        history.push("/education");
        break;
      case "3":
        history.push("/work");
        break;
      case "4":
        history.push("/skills");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <Switch>
        <Route path={"/"} component={Home} exact/>
        <Route path={"/about-me"} component={AboutMe} exact/>
        <Route path={"/education"} component={Education} exact/>
        <Route path={"/work"} component={Work} exact/>
        <Route path={"/skills"} component={Skills} exact/>
      </Switch>
    </>
  );
}

export default App;
