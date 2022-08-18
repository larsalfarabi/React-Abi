import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <React.Fragment>
      <section>
        <Link to={'/about/1/Lars'}>satu</Link>
        <Link to={'/about/2/Syamil'}>dua</Link>
        <Link to={'/about/3/Khadijah'}>tiga</Link>
      </section>
      <h1>ini adalah about</h1>
    </React.Fragment>
  );
}