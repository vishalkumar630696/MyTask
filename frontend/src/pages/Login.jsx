import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", {
                email,
                password,
            });

            console.log(res.data.user.role);



            alert("Login Successful");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.user.role);
            navigate("/posts");

        } catch (error) {
            console.log(error);
            alert("Login Failed");
        }
    };

    return (

        <>
            <div className="d-flex justify-content-center align-items-center vh-100" style={{
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)"
            }}>
                <div
                    className="card shadow-lg p-4 p-md-5 rounded-4"
                    style={{
                        maxWidth: "400px",
                        width: "100%",
                        background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff416c)",
                        color: "#fff",
                        border: "none"
                    }}
                >
                    <h2
                        className="text-center mb-4 fw-bold"
                        style={{
                            background: "linear-gradient(90deg, #ffdd00, #ff416c)",
                            WebkitBackgroundClip: "text",
                            color: "transparent"
                        }}
                    >
                        Login
                    </h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ borderRadius: "1rem" }}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ borderRadius: "1rem" }}
                            />
                        </div>

                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn btn-lg fw-bold btn-gradient"
                                style={{
                                    background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "1rem",
                                    transition: "0.3s"
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-3" style={{ color: "#e0e0e0" }}>
                        Don't have an account?
                        <a href="/register" className="text-decoration-none" style={{ color: "#ffdd00" }}> Register</a>
                    </p>

                    <style>
                        {`
        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        input.form-control:focus {
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
          border-color: #fff;
        }
      `}
                    </style>
                </div>
            </div>


        </>
       
    );
}

export default Login;
