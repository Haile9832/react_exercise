import React, { Fragment } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

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
const DishDetail = ({ dish, comments }) => {
  if (dish != null) {
    const renderComment = comments.map((comment) => {
      return (
        <Fragment key={comment.id}>
          <RenderComment comment={comment} />
        </Fragment>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
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
