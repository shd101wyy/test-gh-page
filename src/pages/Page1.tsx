import React from "react";
import { Link } from "react-router-dom";

export const Page1: React.FC = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
