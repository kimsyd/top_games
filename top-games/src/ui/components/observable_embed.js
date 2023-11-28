import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@sydney-kim-ws/exploration-of-top-selling-video-games-released-each-year";
import FilterFunctions from "./Functions.js"

function ExplorationOfTopSellingVideoGamesReleasedEachYear() {
  const testgraphRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "testgraph") return new Inspector(testgraphRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={testgraphRef} />
      <p>Credit: <a href="https://observablehq.com/@sydney-kim-ws/exploration-of-top-selling-video-games-released-each-year@242">Exploration of top-selling video games released each year by Sydney Kim&#039;s Workspace</a></p>
    </>
  );
}

export default ExplorationOfTopSellingVideoGamesReleasedEachYear;
