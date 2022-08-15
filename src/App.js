import React from "react";
import "./index.css";
import {useGlobalContext} from "./context" 


export default function App() {
  const value = useGlobalContext()
  console.log(value);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some mag
        
        

        
        
        
        ic happen :)</p>
    </div>
  );
}
