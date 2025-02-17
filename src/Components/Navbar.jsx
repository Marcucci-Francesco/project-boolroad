import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className="container-fluid bg-dark d-flex justify-content-center align-items-center py-4">
      <div className="logo-container d-flex align-items-center" onClick={() => navigate("/")}>
        <img className="logo img-fluid" src="/img/Third-logo-transparent.png" alt="logo" />
        {/* <strong className="boolroad-type-logo text-primary">BOOLROAD</strong> */}
      </div>
    </div>



  )
}

export default Navbar