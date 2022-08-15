import React from "react";
import "./index.css";
import {useGlobalContext} from "./context" 
import SetupForm from "./setupForm"
import Loading from "./loading";


export default function App() {
  const {waiting, loading, questions, index, error } = useGlobalContext();
  if(waiting) {
    return <SetupForm/>
  }
  if(loading) {
    return <Loading/>
  }

  return (
    <div>
      <h3>Quiz app</h3>
    </div>
  );
}
