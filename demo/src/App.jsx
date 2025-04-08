import { useState } from 'react'
import React from 'react'

// class App extends React.Component {
//   render(){
//     return (

//       <h1>hello</h1>
//     )
//   }
// }


// -----------using constructor-------------

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {name:"HARI"}
//   }
//   render(){
//     return (
//       <>
//       <h1>hello {this.state.name}</h1>
//       </>

     
//     )
//   }
// }

// ----------using props----------------

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {name:props.name,age:props.age}
//   }
//   render(){
//     return (
//       <>
//       <h1>hello {this.state.name}</h1>
//       <h1>    {this.state.age}</h1>
//       </>

     
//     )
//   }
// }


// --------------nested class-----------------

// class Demo extends React.Component {
//   render(){
//     return (
//       <>
//       <h1>demo Component {this.props.name} </h1>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return (
//       <>
//       <h1>hello</h1>

//       <h2>age {this.props.age}</h2>
//       <Demo name = {this.props.age}/>
//       </>
//     )
//   }
// }

// ---------------using class--------------------

class App extends React.Component {
  constructor(){
    super()
    this.state = {age:20}
  }
  changeAge = () => {
    this.setState({age:25})
  }
render(){
  return(
    <>
    <h1>hello</h1>
    <h2>age {this.state.age}</h2>
    <button onClick={this.changeAge}>changeAge</button>
    </>
  )
}
}
export default App
