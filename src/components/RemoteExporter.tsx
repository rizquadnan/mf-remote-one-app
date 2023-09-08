import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type TRemoteExporter = {
  children: React.ReactNode;
  fallbackComponent?: (props: FallbackProps) => React.ReactNode;
  onError?: () => void;
};
const RemoteExporter = (props: TRemoteExporter) => {
  const handleError = (e: Error, info: React.ErrorInfo) => {
    // log to this remote app's sentry not to host app's sentry
    console.log("logged error from remote-one");
    console.log("error: ", e);
    console.log("info: ", info);
  };

  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) =>
        {
          if (props.fallbackComponent) {
            return props.fallbackComponent({ error, resetErrorBoundary });
          } else {
            return <div>
              <p>Error from remote-one: {JSON.stringify(error)}</p>
              <button onClick={resetErrorBoundary}>Reset Component</button>
            </div>
          }
        }
      }
      onError={props.onError ?? handleError}
    >
      {props.children}
    </ErrorBoundary>
  );
};

export default RemoteExporter;
