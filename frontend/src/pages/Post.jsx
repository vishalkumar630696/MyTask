import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    // 🔹 FETCH POSTS FUNCTION
    const fetchPosts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/posts");
            setPosts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // 🔹 LOAD POSTS ON PAGE LOAD
    useEffect(() => {
        fetchPosts();
    }, []);

    // 🔹 DELETE POST
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            alert("Post deleted successfully");
            fetchPosts(); // 🔥 reload posts
        } catch (error) {
            console.log(error);
        }
    };

    // 🔹 UPDATE POST
    const handleUpdate = async (id) => {
        const newTitle = prompt("Enter new title");
        const newContent = prompt("Enter new content");

        try {
            await axios.put(
                `http://localhost:5000/api/posts/${id}`,
                {
                    title: newTitle,
                    content: newContent,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            alert("Post updated successfully");
            fetchPosts(); // 🔥 reload posts
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container my-5 pt-5">
                <h2
                    className="text-center mb-5 fw-bold"
                    style={{
                        background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                    }}
                >
                    All Posts
                </h2>

                <div className="row g-4">
                    {posts.map((post) => (
                        <div key={post._id} className="col-12 col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm rounded-4 hover-shadow"
                                style={{
                                    background: "#f8f9fa",
                                    transition: "transform 0.3s, box-shadow 0.3s"
                                }}
                            >
                                <div className="card-body d-flex flex-column">
                                    <h5
                                        className="card-title fw-semibold"
                                        style={{
                                            color: "#6c63ff"
                                        }}
                                    >
                                        {post.title}
                                    </h5>

                                    <p className="card-text flex-grow-1">{post.content}</p>

                                    <p className="mb-3 text-muted">
                                        By: <span className="fw-semibold">{post.user?.name}</span>{" "}
                                        <span
                                            className="badge text-white fw-bold"
                                            style={{
                                                backgroundColor: "#00b894"
                                            }}
                                        >
                                            {post.user?.role}
                                        </span>
                                    </p>

                                    <div className="mt-auto d-flex gap-2">
                                        <button
                                            onClick={() => handleUpdate(post._id)}
                                            className="btn btn-outline-primary btn-sm flex-grow-1"
                                        >
                                            Edit
                                        </button>

                                        {localStorage.getItem("role") === "admin" && (
                                            <button
                                                onClick={() => handleDelete(post._id)}
                                                className="btn btn-danger btn-sm flex-grow-1"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style>
                    {`
      .hover-shadow:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.2);
      }
    `}
                </style>
            </div>



            <style>
                {`
.hover-shadow:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
`}
            </style>


        </>
    );
};

export default Posts;
