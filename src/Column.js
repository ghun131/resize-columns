import React from "react";

function Column({ id }) {
  return (
    <div className="Column" data-el={id}>
      {id}
    </div>
  );
}

export default Column;
