import React from "react";

function MemeImage(props) {
  return (
    <div>
      <img
        className="meme-img"
        src={props.data.randomImg}
        alt="Meme Template"
      />
    </div>
  );
}

export default MemeImage;
