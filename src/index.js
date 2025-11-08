import React from "react";
import { createRoot } from "react-dom/client";

import './index.css';

function Greeting() {
  return (
    <div>
      <Message title="Welcome to React" title1="Let's Begin..!"/>
      
    </div>
  );
}

function Message({ title, title1 }){
  return (
  <>  
  <h1 className="heading">{title}</h1>
  <p className="paragraph">{title1}</p>
  </>
);
}
// function Greeting(){
//   return React.createElement("div", {}, React.createElement("h2", {}, "Hello welcome to React Learning Class"))
// }

const container = document.getElementById('root');
const roots = createRoot(container);
roots.render(<Greeting />);