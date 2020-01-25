// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hi Mindset!</h1>
//         <p>Cats secretly make all the worlds muffins i’m so hungry i’m so hungry but ew not for that or cat dog hate mouse eat string barf pillow no baths hate everything where is my slave? I'm getting hungry, at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in.</p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import NameComponent from './NameComponent'
import './App.css';

const names = ['Matthew', 'Neal', 'Michael', 'Dean']

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
           <h1>Hi Mindset!</h1>
           <NameComponent name={'Alfonso'} />
          
          
          <li>{names[3]}</li>
          <br />
          {names.map(name => {
            return <NameComponent key={name} name={name} age={25}/>
          })}
        </header>
       </div>
    )
  }
}



// const App = () => {
//   return(
//           <div className="App">
//             <header className="App-header">
//                <h1>Hi Mindset!</h1>
//                <p>Cats secretly make all the worlds muffins i’m so hungry i’m so hungry but ew not for that or cat dog hate mouse eat string barf pillow no baths hate everything where is my slave? I'm getting hungry, at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in.</p>
//              </header>
//            </div>
//         )

// }

// const App = () => (
//           <div className="App">
//             <header className="App-header">
//                <h1>Hi Mindset!</h1>
//                <p>This one has an implicit return</p>
//              </header>
//            </div>
//         )

export default App
