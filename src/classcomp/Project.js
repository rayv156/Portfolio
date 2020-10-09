import React from "react";

import MdGlobe from 'react-ionicons/lib/MdGlobe'
import LogoGithub from 'react-ionicons/lib/LogoGithub'

class Project extends React.Component {
constructor(props){
  super(props)
  this.state = [{
    name: "Side Bet Scrambler",
    git: "https://github.com/rayv156/side-bet-scrambler",
    live: "https://side-bet-scrambler.herokuapp.com/",
    img: "https://i.imgur.com/BMy8zJa.png"
  },
  {
    name: "College Football App",
    git: "https://github.com/rayv156/College-Football-App",
    live: "https://rayv156.github.io/College-Football-App/",
    img: "https://i.imgur.com/NeRZOf7.png"
  },
  {
    name: "Tic Tac Toe",
    git: "https://github.com/rayv156/Tic-Tac-Toe-App",
    live: "https://rayv156.github.io/Tic-Tac-Toe-App/",
    img: "https://i.imgur.com/s2vCX1o.png"
  },
  {
    name: "Calculator",
    git: "https://github.com/rayv156/Calculator",
    live: "https://rayv156.github.io/Calculator/",
    img: "https://i.imgur.com/nCQwVBH.png"
  }]
}
render() {
  return (
this.state.map((item)=>{

  return (
     <div className="card justify-content-md-center bg-secondary text-white border-light">
<div className="card-header">
      <h3>{item.name}</h3>
      </div>
      <div className="row justify-content-md-center">
  <a href={item.git}><button className="btn btn-light"><LogoGithub fontSize="30px" color="black" /></button></a>
  <a href={item.live}><button className="btn btn-light"><MdGlobe fontSize="30px" color="black" /></button></a>
        </div>
  
        <img className="center-block" src={item.img} alt=""/>
      
    </div>
  
  )
})
)}
}

export default Project