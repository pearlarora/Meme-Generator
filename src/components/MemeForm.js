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
      />
      <input
        type="text"
        placeholder="Bottom Text"
        name="bottomText"
        value={props.data.bottomText}
        onChange={props.handleChange}
      />
      <button>Generate</button>
    </form>
  );
}

export default MemeForm;