import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
	render() {
		return (
			<div className="App">
				<button className="grow" onClick={this.props.onAgeUp}>
					Grow
				</button>
				<div className="Age-label">
					Age:&nbsp; <span>{this.props.age}</span>
				</div>
				<button className="antiage" onClick={this.props.onAgeDown}>
					Anti-age
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		age: state.age,
	};
};

const mapDispachToProps = (dispatch) => {
	return {
		onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
		onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
	};
};
export default connect(mapStateToProps, mapDispachToProps)(App);
