import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
const likes = 0;
const dislikes = 0;
const btnStyle = {
  margin: "40px",
  border: "5px solid pink",
  background: "red",
};
const btnDefault = {};
class NewLike extends React.Component {
  constructor(props) {
    super(props);

    this.likeHandler = this.likeHandler.bind(this);

    this.dislikeHandler = this.dislikeHandler.bind(this);

    this.state = {
      likeCount: likes,
      dislikeCount: dislikes,
    };
  }

  render() {
    return (
      <div>
        <div>{this.props.headerProp}</div>

        <div>
          <span>
            <button
              style={this.state.likeCount !== likes ? btnStyle : btnDefault}
              onClick={this.likeHandler}
            >
              <FavoriteIcon></FavoriteIcon>
            </button>{" "}
            | {this.state.likeCount}
          </span>

          <span>
            <button
              style={
                this.state.dislikeCount !== dislikes ? btnStyle : btnDefault
              }
              onClick={this.dislikeHandler}
            >
              <FavoriteIcon></FavoriteIcon>
            </button>{" "}
            | {this.state.dislikeCount}
          </span>
        </div>
      </div>
    );
  }

  likeHandler() {
    if (this.state.likeCount === likes) {
      this.setState((state) => ({
        likeCount: state.likeCount + 1,
        dislikeCount: dislikes,
      }));
    }
  }

  dislikeHandler() {
    if (this.state.dislikeCount === dislikes) {
      this.setState((state) => ({
        dislikeCount: state.dislikeCount - 1,
        likeCount: likes,
      }));
    }
  }
}

NewLike.defaultProps = {
  headerProp: "",

  contentProp: "",
};

export default NewLike;
