import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "abc-web-components",
  enableCache: false,
  outputTargets: [
    {
      type: "dist-hydrate-script",
    },
    {
      type: "dist-custom-elements",
      dir: "./dist/components",
      externalRuntime: false,
      includeGlobalScripts: false,
    },

    reactOutputTarget({
      outDir: "../app/src/web-components-react-wrapper",
      hydrateModule: "abc-web-components/hydrate",
    }),
  ],
  plugins: [sass()],
};
