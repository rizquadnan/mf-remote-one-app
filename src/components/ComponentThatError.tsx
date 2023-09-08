import React, { useEffect } from "react";
import RemoteExporter from "./RemoteExporter";

const _ComponentThatErrored = () => {
  useEffect(() => {
    throw new Error("BOOOOM!");
  }, []);

  return (
    <div>
      <p>You Won't see this. First render has error</p>
    </div>
  );
};

const ComponentThatErrored = () => (
  <RemoteExporter>
    <_ComponentThatErrored />
  </RemoteExporter>
);

export default ComponentThatErrored;
