import React from "react";
import RemoteExporter from "./RemoteExporter";

const _RemoteOneTitle = () => {
  return <p>Hello from remote one!</p>;
};

const RemoteOneTitle = () => (
  <RemoteExporter>
    <_RemoteOneTitle />
  </RemoteExporter>
);

export default RemoteOneTitle;
