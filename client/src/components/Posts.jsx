import { Component } from "react";

// const Posts = () => {
//     return (
//         <div>
//             <h1>Posts</h1>
//         </div>
//      );
// }

// export default Posts;

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  componentDidUpdate(props, prevState) {
    console.log({
      props,
      prevState,
    });
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.count}
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          inc
        </button>
      </div>
    );
  }
}
