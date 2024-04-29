import "./Child.css";
import { Fragment } from "react";

console.log(React);

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex beatae quibusdam sapiente quod veritatis eum at iure, maxime ipsam, harum eius optio laboriosam dolore, laborum quae est dolorum placeat.
      </p>
    </Fragment>
  );
};

export default Child;
