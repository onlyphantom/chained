import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLiveProvider = ({ code, hideCode }) => {
  return (
    <LiveProvider code={code}>
      {
        !hideCode &&
        <>
          <LiveEditor />
          <LiveError />
        </>
      }
      <LivePreview />
    </LiveProvider>
  );
};

export default ReactLiveProvider;
