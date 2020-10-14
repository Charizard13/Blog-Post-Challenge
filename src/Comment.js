import React from 'react';


function Comment({comment}){
    if(comment.name === "1"){
        throw Error("opps an error")
      }
      
    return (
        <div>
         <div style={{fontWeight: 'bold'}}>{comment.name}</div>
         <div>{comment.content}</div>
        </div>
      );
}

export default Comment;
