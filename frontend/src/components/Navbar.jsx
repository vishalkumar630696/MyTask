import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Logged Out");
        navigate("/");
    };

    return (


        <>
            <nav className="navbar navbar-expand-lg shadow-lg" style={{
                background: "linear-gradient(90deg, #6a11cb, #2575fc, #ff416c)",
                transition: "0.5s all"
            }}>
                <div className="container">

                    <Link to="/" className="navbar-brand text-white fw-bold fs-2">
                        My Task
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav gap-3 fs-5">
                            <li className="nav-item">
                                <Link
                                    to="/posts"
                                    className="nav-link text-white fw-semibold nav-hover"
                                >
                                    Posts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/create"
                                    className="nav-link text-white fw-semibold nav-hover"
                                >
                                    Create
                                </Link>
                            </li>
                            {token && (
                                <li className="nav-item">
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-light text-primary fw-semibold nav-hover"
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <style>
                    {`
      .nav-hover:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        transition: 0.3s all;
      }
    `}
                </style>
            </nav>

        </>

    );
}

export default Navbar;
