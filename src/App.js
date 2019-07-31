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
    pics,
    score: 0,
    topScore: 0
  };

  tagPic = id => {
    //debugger;
    //find the index of the clicked element
    const indx = this.state.pics.findIndex(x => x.id === id);

    //if the clicked pic was not clicked before, 
    //make it clicked now and increase score by 1
    if(!this.state.pics[indx]["clicked"]){
      const newState = {...this.state}
      newState.pics[indx]["clicked"] = true;
      this.setState(newState);

      //max possible score is 12. if achieved, pop alert reset game score to zero.
      if(this.state.score === 11){
        alert("Congratulations! You have won the game!");
        const newState = this.state.pics.forEach(pic => {
          pic.clicked = false;
        });
        this.setState(newState);
        //also set score to 0 
        this.setState({
          score: 0,
          topScore: 12
        });
      }else if(this.state.score >= this.state.topScore){
        //compare score with top score and update one or both if necessary
        this.setState({ 
          topScore: this.state.topScore + 1,
          score: this.state.score + 1
        });
      }else{
        this.setState({score: this.state.score + 1});
      }


    }else{
      //if clicked pic has been clicked before,
      //pop an alert saying game lost and reset all pics to not clicked
      alert("Clicked same image twice. Game Lost!");
      const newState = this.state.pics.forEach(pic => {
        pic.clicked = false;
      });
      this.setState(newState);
      //also set score to 0 
      this.setState({score: 0});
    }

    //shuffle the array after each move//////////////////////////////
    const newState = function(){
      let randPics = this.state.pics;
      let j , x, i;
      for (i = randPics.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i+1));
        x = randPics[i];
        randPics[i] = randPics[j];
        randPics[j] = x;
      }
    }
    this.setState(newState);

  };

  // Map over this.state.pics and render a Clickycomponent for each pics object
  render() {
    return (
      <Wrapper>
        <Navbar
          score= {this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Gameboard>
          {this.state.pics.map(pic => (
            <Clicky
              id={pic.id}
              key={pic.id}
              name={pic.name}
              image={pic.image}
              clicked={pic.clicked} //tags the pic clicked with a true tag
              tagPic = {this.tagPic}
            />
          ))}
          
        </Gameboard>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;