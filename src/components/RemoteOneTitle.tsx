import React from "react";
import RemoteExporter from "./RemoteExporter";
const _RemoteOneTitle = () => {
  return (
    <div>
      <p>Hello from remote one!</p>
    </div>
  );
};

const RemoteOneTitle = () => <RemoteExporter>
  <_RemoteOneTitle />
</RemoteExporter>

export default RemoteOneTitle;
