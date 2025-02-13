import { Link } from "react-router-dom"

const NotFound = () => {


  return (
    <div className="container">
      <div className="bg-danger">
        <h1 className="text-center">ERRORE 404 - PAGE NOT FOUND</h1>
        <p>Your request cannot be fulfilled as the page does not exist!</p>
        <p>Please return to the Homepage.</p>
      </div>
      <Link className="btn btn-primary" to={'/'}>Return to Travels Page</Link>
    </div>
  )
}

export default NotFound