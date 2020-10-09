import React from "react";

class Project extends React.Component {
constructor(props){
  super(props)
  this.state = [{
    name: "Side Bet Scrambler",
    git: "https://github.com/rayv156/side-bet-scrambler",
    live: "https://side-bet-scrambler.herokuapp.com/",
    img: "https://i.imgur.com/xe9dEFz.png"
  },
  {
    name: "College Football App",
    git: "https://github.com/rayv156/College-Football-App",
    live: "https://rayv156.github.io/College-Football-App/",
    img: "https://i.imgur.com/rgzrKnv.png"
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
     <div className="card">
      <h3>{item.name}</h3>
  <a href={item.git}><h6>{item.git}</h6></a>
  <a href={item.live}><h6>{item.live}</h6></a>
  
        <img className="center-block" src={item.img} alt=""/>
      
    </div>
  
  )
})
)}
}

export default Project