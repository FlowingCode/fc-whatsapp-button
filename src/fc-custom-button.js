import { html } from '@polymer/polymer/polymer-element.js';
import { Button } from '@vaadin/button/src/vaadin-button.js';

export class FcCustomButton extends Button {

  static get is() {
    return 'fc-custom-button';
  }

  static get template () {
    return html`
      <style>
        :host [part='label'] {
          text-transform: uppercase;
        }

        :host([part='custom-button']) {
          border-radius: 6px;
          box-shadow: 0 4px 9px #00000024;
          border: none;
          background: #02e777;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 180px;
          font-size: 14px;
          transition: all ease-in-out 100ms;
        }

      </style>
      ${super.template}

      `;
  }
}

customElements.define('fc-custom-button', FcCustomButton);
