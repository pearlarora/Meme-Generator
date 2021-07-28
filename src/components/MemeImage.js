import React from "react";

function MemeImage(props) {
  return (
    <div>
      <img src={props.data.randomImg} alt="Meme Template" />
    </div>
  );
}

export default MemeImage;
