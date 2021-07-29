import React from "react";
import MemeForm from "./MemeForm";
import MemeImage from "./MemeImage";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  handleChange = (event) => {
    // Object Destructring: We declare the variable inside { } so that we can use them without using the complete object calling.
    // Eg. Here we can use 'name' in the code block instead of using 'event.target.name' everytime we want to use the name variable
    const { name, value } = event.target;

    // Array Destructuring: We declare array inside [ ] so that we don't have to specify the array index everytime we want to use it.
    // Eg. Here we don't have to specify the index value of the array whenever we have to use the value of the name(1st element of the array)
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // To get a random index number for the meme image array (between 0 and length of the array)
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);

    // To get the url of the meme image of the random index number(randNum)
    const randMemeImg = this.state.allMemeImgs[randNum].url;

    this.setState({ randomImg: randMemeImg });
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <div>
        <MemeForm
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="container">
          <h1 className="top">{this.state.topText}</h1>
          <MemeImage data={this.state} />
          <h1 className="bottom">{this.state.bottomText}</h1>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
