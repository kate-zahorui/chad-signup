declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
