import React, { useRef, useEffect, useState, Suspense } from "react";
import CommentsError from "./CommentsError";
import "./App.css";
const Comment = React.lazy(() => import('./Comment'))

function App() {
  const [comments, setComments] = useState([{name: "text", content: "text"}]);
  const name = useRef();
  const content = useRef();

  useEffect(() => {
    name.current.focus();
  }, []);

  function addComment() {
    setComments(
      comments.concat({
        name: name.current.value,
        content: content.current.value,
      })
    );
    name.current.focus();
  }
  const onFirstRefChange = (e, field) => {
    if (e.keyCode === 13) {
      switch (field) {
        case "name":
          content.current.focus();
          break;
        case "content":
          content.current.focus();
          break;
        default:
          console.log("Not Found");
          break;
      }
    }
  };
  return (
    <div>
      <div>Welcome to my blog:</div>
      <div>You can post down here</div>
      <input
        ref={name}
        onKeyUp={(e) => onFirstRefChange(e, "name")}
        placeholder="Name"
      ></input>
      <input
        // onKeyUp={(e) => onFirstRefChange(e, "button")}
        ref={content}
        placeholder="Content"
      ></input>
      <button onClick={addComment}>Submit</button>
      {comments.map((comment) => {
        return (
          <CommentsError>
            <Suspense fallback={<div>loading</div>}>
            <Comment comment={comment} /></Suspense>
          </CommentsError>
        );
      })}
    </div>
  );
}

export default App;
