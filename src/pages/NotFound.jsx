import { Link } from "react-router-dom"

const NotFound = () => {


  return (

    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
      <div className="error-404-container text-center ">
        <h1 className="error-title text-danger"><strong>404</strong></h1>
        <p className="error-message"><strong>Oops!</strong></p>
        <p>La pagina che stai cercando non esiste</p>
      </div>
      <Link className="btn btn-primary mt-1" to={'/'}>Return to Travels Page</Link>
    </div>



  )
}

export default NotFound