import React, { useEffect, useState } from "react";
import RemoteExporter from "./RemoteExporter";

const _ComponentThatErrored = () => {
  const [shouldError, setShouldError] = useState(false);

  useEffect(() => {
    if (shouldError) {
      throw new Error("BOOOOM!");
    }
  }, [shouldError]);

  return (
    <div>
      <button onClick={() => setShouldError(true)}>
        Click this to trigger render error
      </button>
    </div>
  );
};

const ComponentThatErrored = () => (
  <RemoteExporter>
    <_ComponentThatErrored />
  </RemoteExporter>
);

export default ComponentThatErrored;
