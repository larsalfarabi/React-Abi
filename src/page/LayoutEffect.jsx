import { useLayoutEffect, useEffect } from "react";

const LayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return <div>{console.log("jalan di sini")}</div>;
};

export default LayoutEffect;
