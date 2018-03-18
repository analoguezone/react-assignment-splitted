import React, { Component } from 'react';
import '../Containers/App.css';
import Validation from '../Components/Validation/validation-component';
import Textinput from '../Components/Text-input';
import Letterbox from '../Components/letter-box';


class App extends Component {
  state ={
    inputValue:''
  }

  changeHandler = (event)=> this.setState({inputValue:event.target.value});


  deleteBoxHandler = (boxIndex) => {
    const lessLetters = [...this.state.inputValue];
    lessLetters.splice(boxIndex,1);
    this.setState({inputValue:lessLetters.join("")});
  }

  render() {

    return (
      <div className="App">
        <Textinput
          changeHandler={this.changeHandler}
          inputValue = {this.state.inputValue}
          length = {this.state.inputValue.length}
          />
        <Validation length={this.state.inputValue.length} />
        <Letterbox
          inputValue = {this.state.inputValue}
          deleteBoxHandler = {this.deleteBoxHandler}
          />
      </div>
    );
  }
}

export default App;
