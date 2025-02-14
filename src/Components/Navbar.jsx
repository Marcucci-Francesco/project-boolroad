import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center py-4 mb-5">
      <div className="logo-container d-flex align-items-center">
        <img className="logo img-fluid" src="/img/logo.png" alt="logo" onClick={() => navigate("/")} />
        <h4 className="text-primary text-center ms-3"><strong className="boolroad">BOOLROAD</strong></h4>
      </div>
    </div>



  )
}

export default Navbar