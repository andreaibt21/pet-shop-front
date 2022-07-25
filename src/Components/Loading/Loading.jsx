import React from "react";
import { Spinner } from "react-bootstrap";
import Styles from "./LoadingStyles.module.scss"

const Loading = () => {
  return (
    <div className={Styles.containerSpinners}>
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="secondary" />
    </div>
  );
};

export default Loading;
