import React from "react";
import { createRoot } from "react-dom/client";

function Greeting() {
  return (
    <div>
      <Message />
      <Message1 />
    </div>
  );
}

function Message(){
  return <h1>Hello!, Welcome To React Learning...</h1>
}

function Message1(){
  return <p>Let's Begin..!</p>
}
// function Greeting(){
//   return React.createElement("div", {}, React.createElement("h2", {}, "Hello welcome to React Learning Class"))
// }

const container = document.getElementById('root');
const roots = createRoot(container);
roots.render(<Greeting />);
