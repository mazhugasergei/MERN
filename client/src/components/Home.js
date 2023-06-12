// fetch
import axios from "axios"
// react
import { useEffect, useState } from "react"

export default () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    axios.get(`https://learning-mern-server.onrender.com/api/notes`)
      .then(res => setNotes(res.data))
      .catch(error => console.log(error.message))
  }, [])

  return (
    <main>
      <nav>
        <div className="title">Notes</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/notes/create">Create</a></li>
        </ul>
      </nav>
      <div className="notes">
        {
          notes && notes.length ?
            notes.map(note => (
              <a href={`/notes/${note._id}`} className="note" key={note._id}>{ note.body }</a>
            ))
          :
            <p>No notes :(</p>
        }
      </div>
    </main>
  )
}