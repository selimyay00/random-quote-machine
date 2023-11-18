import { useState } from "react"
import { useEffect } from "react"

function App() { 
  // to keep track of the quote appearing in the UI
  const [currentQuote, setCurrentQuote] = useState('')

  // to store all the quotes
  const [allQuotes, setAllQuotes] = useState([])

  // fetch data from an API
    // inside the useEffect Hook

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        // now all quotes will be stored in allQuotes state
        setAllQuotes(data)
        // initial quote will be the first one in allQuotes
        setCurrentQuote(data[0])
      })
  }, [])

  // create a function which generates a random index
    // for the parameter
      // use allQuotes length as a limit 
  function randomQuote(quote) {
    return quote[Math.floor(Math.random() * allQuotes.length)]quote
  }
  
  function newQuote() {
    setCurrentQuote(randomQuote(allQuotes))
  }

  return (
    <main>
      <h3>Quote</h3>
      <i>Author</i>
      <button onClick={newQuote}>New Quote</button>
    </main>
  )
}

export default App
