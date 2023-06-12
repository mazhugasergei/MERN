// fetch
import axios from "axios"
// react
import { useEffect, useState } from "react"

export default () => {
  const [notes, setNotes] = useState()

  useEffect(async () => {
    await axios.get(`${process.env.API}/api/notes`)
    .then(res => setNotes(res.data))
    .catch(error => {
      console.log(error.message)
      setNotes(undefined)
    })
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
          notes ?
            notes.length ?
              notes.map(note => (
                <a href={`/notes/${note._id}`} className="note">{ note.body }</a>
              ))
            :
              <p>No notes :(</p>
          :
            <div className="error-cont">
              <div className="error">
                <b>Oops</b>
                <p>There was an error fetching notes :(</p>
                <a href="/" className="btn">Reload</a>
              </div>
            </div>
        }
      </div>
    </main>
  )
}