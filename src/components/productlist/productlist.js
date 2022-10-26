import React from "react";
import ProductItem from "../productItem/ProductItem";
export default class Products extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <ProductItem
          imageUrl="./work-test/images/t-shirt.webp"
          imageAlt="shirt"
          title="t-shirt"
          subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics"
          price="700"
          discountedprice="500"
          addToWishList={this.props.addToWishList}
        ></ProductItem>
        <ProductItem
          imageUrl="./work-test/images/vneck-tee-2.jpg"
          imageAlt="shirt"
          title="t-shirt"
          subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics"
          price="1000"
          discountedprice="300"
          addToWishList={this.props.addToWishList}
        ></ProductItem>
        <ProductItem
          imageUrl="./work-test/images/vneck-tee-2.jpg"
          imageAlt="shirt"
          title="T-shirt"
          subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics"
          price="800"
          discountedprice="700"
          addToWishList={this.props.addToWishList}
        ></ProductItem>
        <ProductItem
          imageUrl="./work-test/images/t-shirt.webp"
          imageAlt="shirt"
          title="t-shirt white"
          subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics"
          discountedprice="523"
          addToWishList={this.props.addToWishList}
        ></ProductItem>
        <ProductItem
          imageUrl="./work-test/images/vneck-tee-2.jpg"
          imageAlt="shirt"
          title="t-shirt red"
          subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics"
          discountedprice="999"
          addToWishList={this.props.addToWishList}
        ></ProductItem>
        <ProductItem
          imageUrl="./work-test/images/t-shirt.webp"
          imageAlt="shirt"
          title="t-shirt nike"
          subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semioticsbtitle"
          discountedprice="612"
          addToWishList={this.props.addToWishList}
        ></ProductItem>
      </div>
    );
  }
}
