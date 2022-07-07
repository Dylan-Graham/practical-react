import React from "react";

export const Body = (props) => {
  return (
    <div>
      <div>I'm the body and this is my {props.bodyText}</div>
      <div>
        Obj1: {props.bodyObj.a} obj2: {props.bodyObj.b}
      </div>
    </div>
  );
};
