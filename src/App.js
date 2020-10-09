import React from "react";
import "./styles.css";
import Project from "./classcomp/Project.js";
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'


class App extends React.Component {
  render() {
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">Portfolio</a>

    
        <a className="nav-link" href="www.linkedin.com/in/velasquezray"><LogoLinkedin fontSize="40px" color="black" /></a>
        <a className="nav-link" href=""><LogoGithub fontSize="40px" color="black" /></a>

</nav>

      <h1> Ray Velasquez</h1>
<Project />
    </>
    
    )
  }
}

export default App;
