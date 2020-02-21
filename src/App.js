import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { incrementar } from "./redux/actions";

class App extends React.Component {
  // state = {
  //   contador: 0
  // };

  incrementar = () => {
    // const contador = this.state.contador;
    // this.setState({ contador: contador + 1 });
    this.props.dispatch({type: 'INCREMENTAR'});
  };

  render() {
    return (
      <>
        <span>{this.props.contador}</span>
        <button onClick={this.incrementar}>aumentar</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contador: state.contador
  }
}

export default connect(mapStateToProps)(App);
