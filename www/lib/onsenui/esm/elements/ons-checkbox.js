import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/*
Copyright 2013-2015 ASIAL CORPORATION
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import onsElements from '../ons/elements';
import BaseCheckboxElement from './base/base-checkbox';

var scheme = {
  '.checkbox': 'checkbox--*',
  '.checkbox__input': 'checkbox--*__input',
  '.checkbox__checkmark': 'checkbox--*__checkmark'
};

/**
 * @element ons-checkbox
 * @category form
 * @modifier material
 *  [en]Displays a Material Design checkbox.[/en]
 *  [ja][/ja]
 * @modifier noborder
 *  [en]iOS borderless checkbox.[/en]
 *  [ja][/ja]
 * @description
 *  [en]
 *    A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
 *
 *    Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<ons-checkbox>` element.
 *  [/en]
 *  [ja][/ja]
 * @tutorial vanilla/Reference/checkbox
 * @seealso ons-switch
 *   [en]The `<ons-switch>` element is used to display a draggable toggle switch.[/en]
 *   [ja][/ja]
 * @seealso ons-radio
 *   [en]The `<ons-radio>` element is used to display a radio button.[/en]
 *   [ja][/ja]
 * @seealso ons-input
 *   [en]The `<ons-input>` element is used to display a text input.[/en]
 *   [ja][/ja]
 * @seealso ons-search-input
 *   [en]The `<ons-search-input>` element is used to display a search input.[/en]
 *   [ja][/ja]
 * @seealso ons-range
 *   [en]The `<ons-range>` element is used to display a range slider.[/en]
 *   [ja][/ja]
 * @seealso ons-select
 *   [en]The `<ons-select>` element is used to display a select box.[/en]
 *   [ja][/ja]
 * @guide theming.html#modifiers [en]More details about the `modifier` attribute[/en][ja]modifier属性の使い方[/ja]
 * @example
 * <ons-checkbox checked></ons-checkbox>
 */

var CheckboxElement = function (_BaseCheckboxElement) {
  _inherits(CheckboxElement, _BaseCheckboxElement);

  function CheckboxElement() {
    _classCallCheck(this, CheckboxElement);

    return _possibleConstructorReturn(this, (CheckboxElement.__proto__ || _Object$getPrototypeOf(CheckboxElement)).apply(this, arguments));
  }

  _createClass(CheckboxElement, [{
    key: '_scheme',
    get: function get() {
      return scheme;
    }
  }, {
    key: '_defaultClassName',
    get: function get() {
      return 'checkbox';
    }
  }, {
    key: 'type',
    get: function get() {
      return 'checkbox';
    }

    /**
     * @attribute input-id
     * @type {String}
     * @description
     *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
     *  [ja][/ja]
     */

    /**
     * @property value
     * @type {String}
     * @description
     *   [en]The current value of the checkbox.[/en]
     *   [ja][/ja]
     */

    /**
     * @property checked
     * @type {Boolean}
     * @description
     *   [en]Whether the checkbox is checked or not.[/en]
     *   [ja][/ja]
     */

    /**
     * @property disabled
     * @type {Boolean}
     * @description
     *   [en]Whether the checkbox is disabled or not.[/en]
     *   [ja]無効化されている場合に`true`。[/ja]
     */

  }]);

  return CheckboxElement;
}(BaseCheckboxElement);

export default CheckboxElement;


onsElements.Checkbox = CheckboxElement;
customElements.define('ons-checkbox', CheckboxElement);