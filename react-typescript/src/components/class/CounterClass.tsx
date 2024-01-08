import { Component } from "react";

type CounterProps = {
  message: string;
};
type CounterState = {
  count: number;
};
export class CounterClass extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <div>
          {this.props.message} {this.state.count}
        </div>
      </div>
    );
  }
}
