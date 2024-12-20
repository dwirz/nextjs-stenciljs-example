import { AttachInternals, Component, h } from "@stencil/core";

@Component({
  tag: "abc-input",
  shadow: true,
  formAssociated: true,
})
export class Input {
  @AttachInternals()
  internals: ElementInternals;

  componentDidLoad() {
    // This call leads to a server-side console.error
    // because of https://github.com/ionic-team/stencil/blob/c2e97f797f6eb7b843aa153fef2780073ec76898/src/mock-doc/node.ts#L234
    this.internals.setValidity({});
  }

  render() {
    return (
      <label>
        Input Label
        <input />
      </label>
    );
  }
}
