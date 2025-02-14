import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center py-4 mb-5">
      <div className="logo-container">
        <img className="logo img-fluid" src="" alt="logo" onClick={() => navigate("/")} />
      </div>
    </div>

  )
}

export default Navbar