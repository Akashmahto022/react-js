import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactELement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "Akash Kumar"

const anotherElement = (  
  <a href="https://google.com" target="_blank">visit google</a>
)

const reactELement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'click me to visit google Aaksh',
  anotherUser
)


ReactDOM.createRoot(document.getElementById("root")).render(
  reactELement
);
