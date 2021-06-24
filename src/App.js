
import React from 'react';

// 元の文
// function App() {
//   return <input type="text" onClick={() => {console.log("I am clicked")}} />;
// }

// class App extends Component{
//   render(){
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
