import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard"
import Clicky from "./components/Clicky";
import Footer from "./components/Footer";
import pics from "./pics.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pics
  };

  tagPic = id => {
    // Filter this.state.pics for pics with an id not equal to the id being removed
    //const pics = this.state.pics.update(pics => pics.id === id);
    //set the tagged value to true

    // Set this.state.friends equal to the new friends array
    //this.setState({ pics });
  };

  // Map over this.state.pics and render a Clickycomponent for each pics object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Header />
        <Gameboard>
          {this.state.pics.map(pic => (
            <Clicky
              id={pic.id}
              key={pic.id}
              name={pic.name}
              image={pic.image}
              //clicked={this.clicked} //tags the pic clicked with a true tag
            />
          ))}
          
        </Gameboard>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;