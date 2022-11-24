import React, { memo, useCallback, useMemo } from "react";

export default function Optimize() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState("Color");
  console.log("parent render");
  const handleCount = () => {
    setCount((c) => c + 1);
  };
  const handleCountOP = useCallback(handleCount, []);

  // * ---- useCallback(func, deps) ----
  // const handleCount = useCallback(() => {
  //   setCount((c) => c + 1);
  // }, []);
  // console.log('useCallback', handleCountOP)

  // * ---- useMemo(func, deps) ----

  const prosesBerat = (count) => {
    if (count < 200000) {
    }
    console.log("proses Berjalan");

    return count + 1;
  };
  const prosesBeratMemo = useMemo(() => {
    return prosesBerat(count);
  }, [count]);

  console.log("useMemo", prosesBeratMemo);
  console.log("useCallBack", handleCountOP);
  return (
    <div>
      <h1>Parent</h1>
      <p>count : {count}</p>

      <button
        onClick={handleCount}
        className="px-2 py-1 border border-green-500 rounded bg-white text-black hover:border-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out"
      >
        Klik Parent
      </button>
      <div>
        <p>Count 2 : {prosesBeratMemo}</p>
        <button
          onClick={() => {
            setUser("blue");
          }}
          className="px-2 py-1 border border-blue-500 rounded bg-white text-black hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all ease-in-out"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setUser("green");
          }}
          className="px-2 py-1 border border-green-500 rounded bg-white text-black hover:border-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out"
        >
          Green
        </button>
        <button
          onClick={() => {
            setUser("yellow");
          }}
          className="px-2 py-1 border border-yellow-500 rounded bg-white text-black hover:border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all ease-in-out"
        >
          Yellow
        </button>
      </div>
      <MemorizeChild user={user} handleCount={handleCount} />
    </div>
  );
}

function Child({ user, handleCount }) {
  console.log("child render", Date.now());
  // delay(2000);
  return (
    <div>
      <h2>Child</h2>
      <p>User : {user}</p>
      <button
        className="px-2 py-1 border border-green-500 rounded bg-white text-black hover:border-green-500 hover:bg-green-500 hover:text-white transition-all ease-in-out"
        onClick={handleCount}
      >
        Klik Child
      </button>
    </div>
  );
}

const MemorizeChild = memo(Child);
// export memo(Child)

function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  if (milliseconds < 20000) {
  }
}
