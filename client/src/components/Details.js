// fetch
import axios from "axios"
// react
import { useEffect, useState } from "react"
// router
import { useParams } from "react-router-dom"

export default () => {
  const { id } = useParams()
  const [note, setNote] = useState()

  useEffect(()=>{
    axios.get(`https://learning-mern-server.onrender.com/api/notes/${id}`)
      .then(res => setNote(res.data))
      .catch(error => console.log(error.message))
  }, [])

  const deleteNote = async () => {
    await axios.delete(`https://learning-mern-server.onrender.com/api/notes/${id}`)
      .then(() => window.location = "#/")
  }

  return (
    <main>
      <nav>
        <div className="title">Details</div>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/notes/create">Create</a></li>
          <li><a className="delete" onClick={deleteNote}>Delete</a></li>
        </ul>
      </nav>
      {
        note && <p>{ note.body }</p>
      }
    </main>
  )
}