import { AttachInternals, Component, h } from "@stencil/core";

@Component({
  tag: "abc-checkbox",
  shadow: true,
  formAssociated: true,
})
export class Checkbox {
  @AttachInternals()
  internals: ElementInternals;

  componentDidLoad() {
    // This is a workaround to avoid the error message in the console.
    if (typeof window === "undefined" || window.constructor.name !== "Window") {
      return;
    }

    this.internals.setValidity({});
  }

  render() {
    return (
      <label>
        <input type="checkbox" />
        Checkbox Label
      </label>
    );
  }
}
