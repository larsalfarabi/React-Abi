import React from "react";

function Input({ isError, textError, ...props }) {
  return (
    <div style={{margin: "30px 0px"}}>
      <input {...props} className="input"></input>
      {isError && <p className="error">{textError}</p>}
    </div>
  );
}
function TextArea({ isError, textError, ...props }) {
    return (
      <div>
        <textarea  rows="5" cols="33" {...props} className="input"></textarea>
        {isError && <p className="error">{textError}</p>}
      </div>
    );
  }

export {Input, TextArea}