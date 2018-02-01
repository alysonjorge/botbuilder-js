/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Describes a shipping option
 *
 */
class PaymentShippingOption {
  /**
   * Create a PaymentShippingOption.
   * @member {string} [id] String identifier used to reference this
   * PaymentShippingOption
   * @member {string} [label] Human-readable description of the item
   * @member {object} [amount] Contains the monetary amount for the item
   * @member {string} [amount.currency] A currency identifier
   * @member {string} [amount.value] Decimal monetary value
   * @member {string} [amount.currencySystem] Currency system
   * @member {boolean} [selected] Indicates whether this is the default
   * selected PaymentShippingOption
   */
  constructor() {
  }

  /**
   * Defines the metadata of PaymentShippingOption
   *
   * @returns {object} metadata of PaymentShippingOption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaymentShippingOption',
      type: {
        name: 'Composite',
        className: 'PaymentShippingOption',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          amount: {
            required: false,
            serializedName: 'amount',
            type: {
              name: 'Composite',
              className: 'PaymentCurrencyAmount'
            }
          },
          selected: {
            required: false,
            serializedName: 'selected',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PaymentShippingOption;
