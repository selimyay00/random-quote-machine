import { useState } from "react"

function App() { 
  // to keep track of the quote appearing in the UI
  const [currentQuote, setCurrentQuote] = useState('')

  // to store all the quotes
  const [allQuotes, setAllQuotes] = useState([])

  return (
    <main>
      <h3>Quote</h3>
      <i>Author</i>
      <button>New Quote</button>
    </main>
  )
}

export default App
