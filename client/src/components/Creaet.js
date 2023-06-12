// fetch
import axios from "axios"
// react
import { useState } from "react"

export default () => {
  const [textareaBody, setTextareaBody] = useState("")

  const createNote = async (e) => {
    e.preventDefault()

    await axios.post(`https://learning-mern-server.onrender.com/api/notes`, { body: textareaBody })
      .then(res => window.location = `#/notes/${res.data}`)
      .catch(error => console.log(error))
  }

  return (
    <main>
      <nav>
        <div className="title">Create</div>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/notes/create">Create</a></li>
        </ul>
      </nav>
      <form onSubmit={createNote}>
        <textarea placeholder="Text" onChange={(e)=>{setTextareaBody(e.target.value)}}></textarea>
        <button className="btn">Create</button>
      </form>
    </main>
  )
}