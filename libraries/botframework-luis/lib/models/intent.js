/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.2.2.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * LUIS intent. Look at https://www.luis.ai/Help for more information.
 *
 */
class Intent {
  /**
   * Create a Intent.
   * @member {string} [intent] The LUIS intent detected by LUIS service in
   * response to a query.
   * @member {number} [score] The score for the detected intent.
   * @member {array} [actions] The action associated with this Luis intent.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Intent
   *
   * @returns {object} metadata of Intent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Intent',
      type: {
        name: 'Composite',
        className: 'Intent',
        modelProperties: {
          intent: {
            required: false,
            serializedName: 'intent',
            type: {
              name: 'String'
            }
          },
          score: {
            required: false,
            serializedName: 'score',
            type: {
              name: 'Number'
            }
          },
          actions: {
            required: false,
            serializedName: 'actions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'Action'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Intent;
