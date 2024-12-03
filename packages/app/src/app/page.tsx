import { FC } from "react";
import {
  AbcCheckbox,
  AbcInput,
} from "../web-components-react-wrapper/components";

const Page: FC = () => (
  <div>
    <p>
      When calling <code>this.internals.setValidity</code> (where{" "}
      <code>internals</code> is annotated with <code>@AttachInternals()</code>),
      within lifecycle methods such as <code>componentDidLoad</code> on a<br />
      component that has the <code>formAssociated</code> flag set to{" "}
      <code>true</code>, and the component is rendered server-side, the
      following <code>console.error</code> message appears on the server:
    </p>
    <p>
      <code>
        NOTE: Property setValidity was accessed on ElementInternals, but this
        property is not implemented.
        <br />
        Testing components with ElementInternals is fully supported in e2e
        tests.
      </code>
    </p>
    <br />
    <form>
      <div>
        <AbcInput />
      </div>
      <div>
        <AbcCheckbox />
      </div>
    </form>
  </div>
);

export default Page;
