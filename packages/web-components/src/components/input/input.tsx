import { Component, h, Prop } from '@stencil/core';

/**
 * @slot - For Label and Icon
 */
@Component({
  tag: 'abc-input',
  styleUrl: 'input.scss',
  shadow: true,
  formAssociated: true,
})
export class Button {
  @Prop()
  disabled = false;

  @Prop()
  ariaLabel: string;

  render() {
    return (
      <label>
        Label
        <input />
      </label>
    ) as JSX.Element;
  }
}
