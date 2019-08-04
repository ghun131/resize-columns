import React, {useRef} from "react";

function Column({ id, cols, ref }) {
    // const idRef = useRef(id)
    console.log(ref)
  return (
    <div
      className="Column"
    //   ref={idRef}
      style={{
        width: `${7 * cols}vw`
      }}
    >
      {id}
    </div>
  );
}

export default Column;
