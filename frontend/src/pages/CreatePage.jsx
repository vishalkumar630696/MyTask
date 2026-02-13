import { useState } from "react";
import API from "../api/axios";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/posts", {
                title,
                content,
            });

            alert("Post Created Successfully");
            console.log(res.data);
        } catch (error) {
            console.log(error.response?.data);
            alert("Error creating post");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center my-5">
                <div
                    className="card shadow-lg p-4 p-md-5 rounded-4"
                    style={{
                        maxWidth: "600px",
                        width: "100%",
                        background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff416c)",
                        color: "#fff",
                        border: "none"
                    }}
                >
                    <h2
                        className="text-center mb-4 fw-bold"
                        style={{
                            background: "linear-gradient(90deg, #f8ff00, #3ad59f)",
                            WebkitBackgroundClip: "text",
                            color: "transparent"
                        }}
                    >
                        Create Post
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Title"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                style={{ borderRadius: "1rem" }}
                            />
                        </div>

                        <div className="mb-3">
                            <textarea
                                className="form-control form-control-lg"
                                placeholder="Enter Content"
                                onChange={(e) => setContent(e.target.value)}
                                rows="6"
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
                                Create Post
                            </button>
                        </div>
                    </form>

                    <style>
                        {`
        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        input.form-control:focus, textarea.form-control:focus {
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

export default CreatePost;
