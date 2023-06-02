import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

const RenderComment = ({ comment }) => {
  return (
    <>
      <div>{comment.comment}</div>
      <div className="mb-3 mt-3">
        --{comment.author},
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comment.date)))}
      </div>
    </>
  );
};
const RenderDish = ({ dish }) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};
const DishDetail = ({ dish }) => {
  if (dish != null) {
    const renderComment = dish.comments.map((comment) => {
      return <RenderComment comment={comment} />;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">{renderComment}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
