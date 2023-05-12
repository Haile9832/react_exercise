import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.dish != null) {
      const renderComment = this.props.dish.comments.map((comment) => {
        return (
          <>
            <div>{comment.comment}</div>
            <div className="mb-3 mt-3">
              --{comment.author},{comment.date}
            </div>
          </>
        );
      });
      const RenderComment = () => {
        return (
          <>
            <h4>Comment</h4>
            {renderComment}
          </>
        );
      };
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComment />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
