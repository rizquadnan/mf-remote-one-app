import React, { useEffect, useState } from "react";
import RemoteExporter from "./RemoteExporter";
import { useErrorBoundary } from "react-error-boundary";

const _ComponentWithRenderErrored = () => {
  const { showBoundary } = useErrorBoundary();
  const handleClick = () => {
    try {
      // @ts-ignore
      // this will error. simulating an error on event handler
      JSON.parse({})
    } catch (error) {
      // shows error boundary
      showBoundary(error)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click this to trigger handler error
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
