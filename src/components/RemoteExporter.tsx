import React from "react";
import { ErrorBoundary } from "react-error-boundary";

type TRemoteExporter = {
  children: React.ReactNode;
  fallbackComponent?: React.ReactElement;
  onError?: () => void;
};
const RemoteExporter = (props: TRemoteExporter) => {
  const handleError = (e: Error, info: React.ErrorInfo) => {
    // log to this remote app's sentry not to host app's sentry
    console.log("logged error from remote-one");
    console.log('error: ', e)
    console.log("info: ", info);
  };

  return (
    <ErrorBoundary
      fallback={props.fallbackComponent ?? <div>Error! This is an error fallback defined in remote-one</div>}
      onError={props.onError ?? handleError}
    >
      {props.children}
    </ErrorBoundary>
  );
};

export default RemoteExporter;
