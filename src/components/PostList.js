import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "./../actions";

class Postlist extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Postlist</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Postlist);
