// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import logo from './Logo.png'

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <nav>
                <div class='row clearfix'>
                    <img src={logo} class='logo'/>


                    <ul class='main-nav animated slideInDown'>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SIGN UP</a></li>
                        <li><a href="#">Help</a></li>    
                    </ul>

                </div>
            </nav>

            <div class='main-content-header'>
            <h1>WELCOME TO <span class="blink">MOBILE LEGENDS</span>.<br/>
                THE COMPLEATE GUIDE</h1>

            <a href="drop.html" class='btn btn-full'>Get Strated</a>
            <a href="#" class='btn btn-more'>View More</a>
            </div>   


        </header>
      </div>
    )
  }
}
export default App

