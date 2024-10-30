import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'abc-web-components',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      externalRuntime: false,
      includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      outDir: '../web-components-react-wrapper/lib/',
      hydrateModule: 'abc-web-components/hydrate',
    }),
  ],
  plugins: [sass(), inlineSvg()],
};
