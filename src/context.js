import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,}
const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = '';
let tempUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState(false)
  
  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch(err => console.log(err))
    if(response) {
      const data = response.data.results;
     if(data.length > 0) {
       setLoading(false);
       setQuestions(data);
       setError(false);
     } else {
       setError(true);
     }
      
    } else {
      setWaiting(true)
    }
  }

useEffect(() => {
  fetchQuestions(tempUrl);
}, [])
  return <AppContext.Provider value={{
    waiting,
    loading,
    questions, 
    index,
    setQuestions,
    correct,
    setCorrect,
  }}>{children}</AppContext.Provider>
}
// make sue
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
