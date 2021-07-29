import React from "react";

function MemeForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Top Text"
        name="topText"
        value={props.data.topText}
        onChange={props.handleChange}
        className="top-text"
      />
      <input
        type="text"
        placeholder="Bottom Text"
        name="bottomText"
        value={props.data.bottomText}
        onChange={props.handleChange}
        className="bottom-text"
      />
      <button className="generate">GENERATE</button>
    </form>
  );
}

export default MemeForm;
