import React, { useEffect, useRef } from "react";
import Column from "./Column";

const data = [{ id: "jakfjdksfj" }, { id: "wuriew" }, { id: "vnxnvx" }];

function Row(props) {
    const childRef = useRef()
  useEffect(() => {
    // console.log(document.getElementsByClassName("Row")[0].offsetWidth);
    console.log(childRef)
  });
  const handleClick = () => {
      console.log('clicked Row')
      // get child id from parent
      // conditionally set props from parent
  }
  return (
    <div
    className="Row"
    onClick={handleClick}
    >
      {data.map(el => (
        <Column key={el.id} {...el} cols={1} ref={childRef}/>
      ))}
    </div>
  );
}

export default Row;
