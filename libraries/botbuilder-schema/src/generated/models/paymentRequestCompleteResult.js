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

/**
 * Result from a completed payment request
 *
 */
class PaymentRequestCompleteResult {
  /**
   * Create a PaymentRequestCompleteResult.
   * @member {string} [result] Result of the payment request completion
   */
  constructor() {
  }

  /**
   * Defines the metadata of PaymentRequestCompleteResult
   *
   * @returns {object} metadata of PaymentRequestCompleteResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PaymentRequestCompleteResult',
      type: {
        name: 'Composite',
        className: 'PaymentRequestCompleteResult',
        modelProperties: {
          result: {
            required: false,
            serializedName: 'result',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PaymentRequestCompleteResult;