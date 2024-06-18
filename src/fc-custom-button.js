/*-
 * #%L
 * @flowingcode/fc-whatsapp-button
 * %%
 * Copyright (C) 2022 - 2024 Flowing Code
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
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
