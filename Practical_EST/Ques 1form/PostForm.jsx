import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: body
      })
    });

    if (response.ok) {
      setMessage("Post submitted successfully!");
      setTitle("");
      setBody("");
    } else {
      setMessage("Failed to submit the post.");
    }
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px"
          }}
        />

        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
            height: "80px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>

      {message && (
        <h3 style={{ marginTop: "15px", color: "green" }}>{message}</h3>
      )}
    </div>
  );
}

export default PostForm;
