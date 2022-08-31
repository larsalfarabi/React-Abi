import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <React.Fragment>
      <section>
        <Link to={'/about/1/Lars/2 SMA'}>satu</Link>
        <Link to={'/about/2/Syamil/2 SD'}>dua</Link>
        <Link to={'/about/3/Khadijah/1 SD'}>tiga</Link>
      </section>
      <h1>ini adalah about</h1>
    </React.Fragment>
  );
}