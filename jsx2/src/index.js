// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
  const buttonText = {text: 'Click me!'};

  return (
    <div>
      <label className="label" htmlFor="name">
        Search:
      </label>
      <br />
      <br />
      <input id="name" placeholder="Search" type="text" />
      <button style={{ color: '#fff', backgroundColor: 'aqua' }} type="submit">
        { buttonText.text }
      </button>
    </div>
  );
}

// Take theReact component and show it on the screen

ReactDOM.render(
  <App />,  // JS tag
  document.querySelector('#root')  // reference to HTML tag <div id="root">, where the JS tag <App> will be shown
  // this is a build-in native function that is available in all browsers so we don't need to import anything
);
