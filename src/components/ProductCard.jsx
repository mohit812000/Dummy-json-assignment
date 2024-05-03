import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { truncate } from "./util";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "100%", height: "410px" }} className="mb-4">
        <Card.Img
          variant="top"
          src={product.thumbnail}
          style={{ height: "200px", padding: "10px", objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{truncate(product.description, 40)}</Card.Text>
          <h4>Price:{product.price}</h4>

          <Button variant="primary" className="mt-3">
            <Link
              className="text-light"
              to={"/product/" + product.id}
              style={{ textDecoration: "none" }}
            >
              View Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
