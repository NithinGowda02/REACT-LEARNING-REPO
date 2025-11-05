import React from "react";
import { createRoot } from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <h2>Welcome to React Learning</h2>
//     </div>
//   );
// }
function Greeting(){
  return React.createElement("div", {}, React.createElement("h2", {}, "Hello welcome to React Learning Class"))
}

const container = document.getElementById('root');
const roots = createRoot(container);
roots.render(<Greeting />);