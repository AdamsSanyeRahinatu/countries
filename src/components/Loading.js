import React from "react";
import { CubeSpinner } from "react-spinners-kit";
function Loading() {
  return (
    <section className="loading">
      <CubeSpinner size={50} color="green" />
    </section>
  );
}

export default Loading;
