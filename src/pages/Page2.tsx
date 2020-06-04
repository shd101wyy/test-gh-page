import React from "react";
import { Link } from "react-router-dom";

interface Props {
  queryParams: any;
}

export const Page2 = (props: Props) => {
  return (
    <div>
      <h1>Page 2</h1>
      <Link to={"/"}>Home</Link>
      <pre>{JSON.stringify(props.queryParams)}</pre>
    </div>
  );
};
