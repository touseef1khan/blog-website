
"use client";
import { useEffect, useState } from "react";

const CommentSection = ({ id }: { id: string }) => {
  const [comments, setComments] = useState<string[]>([]);

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${id}`);
    if (storedComments) {
      try {
        setComments(JSON.parse(storedComments));
      } catch (error) {
        console.error("Error parsing stored comments:", error);
        setComments([]);
      }
    }
  }, [id]);

  // Handle adding new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment("");
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index); // Remove the comment at the specified index
    setComments(updatedComments); // Update state
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments)); // Update localStorage
  };

  return (
    <div className="comment-section">
      <h2 className="text-3xl font-bold">Comments</h2>

      {/* Comments List */}
      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="comment flex justify-between items-center"
            >
              <p>{comment}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                className=" bg-red-500 px-3 py-1 rounded-md text-white hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      {/* Input for new comment */}
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
