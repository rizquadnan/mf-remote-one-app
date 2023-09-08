import React, { useEffect, useState } from "react";
import RemoteExporter from "./RemoteExporter";

const _ComponentWithRenderErrored = () => {
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

const ComponentWithRenderErrored = () => (
  <RemoteExporter>
    <_ComponentWithRenderErrored />
  </RemoteExporter>
);

export default ComponentWithRenderErrored;
