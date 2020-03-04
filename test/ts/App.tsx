import React from 'react';

interface AppProps {}

interface AppState {
  count: number;
}

export default class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  private incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  private decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  public render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Count: {count} </h2>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}
