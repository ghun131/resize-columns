import React from "react";
import Column from "./Column";

const data = [{ id: "jakfjdksfj" }, { id: "wuriew" }, { id: "vnxnvx" }];

function Row() {
    console.log(document.getElementsByClassName("Row"))
  return (
    <div className="Row">
      {data.map(el => (
        <Column key={el.id} {...el} />
      ))}
    </div>
  );
}

export default Row;
