import { FC } from "react";
import { AbcInput } from "../web-components-react-wrapper/components";

const Page: FC = () => (
  <div>
    <h1>Form</h1>
    <p>
      Using a Stencil Web Component wrapped by
      <code>@stencil/react-output-target</code>
      within a form and the <code>formAssociated</code> flag set in a Next.js
      App, leads to an client-side error
      <code>Uncaught RangeError: Maximum call stack size exceeded</code>
    </p>
    <form>
      <AbcInput />
    </form>
  </div>
);

export default Page;
