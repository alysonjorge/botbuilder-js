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
 * A thumbnail card (card with a single, small thumbnail image)
 *
 */
class ThumbnailCard {
  /**
   * Create a ThumbnailCard.
   * @member {string} [title] Title of the card
   * @member {string} [subtitle] Subtitle of the card
   * @member {string} [text] Text for the card
   * @member {array} [images] Array of images for the card
   * @member {array} [buttons] Set of actions applicable to the current card
   * @member {object} [tap] This action will be activated when user taps on the
   * card itself
   * @member {string} [tap.type] The type of action implemented by this button.
   * Possible values include: 'openUrl', 'imBack', 'postBack', 'playAudio',
   * 'playVideo', 'showImage', 'downloadFile', 'signin', 'call', 'payment',
   * 'messageBack'
   * @member {string} [tap.title] Text description which appears on the button
   * @member {string} [tap.image] Image URL which will appear on the button,
   * next to text label
   * @member {string} [tap.text] Text for this action
   * @member {string} [tap.displayText] (Optional) text to display in the chat
   * feed if the button is clicked
   * @member {object} [tap.value] Supplementary parameter for action. Content
   * of this property depends on the ActionType
   */
  constructor() {
  }

  /**
   * Defines the metadata of ThumbnailCard
   *
   * @returns {object} metadata of ThumbnailCard
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ThumbnailCard',
      type: {
        name: 'Composite',
        className: 'ThumbnailCard',
        modelProperties: {
          title: {
            required: false,
            serializedName: 'title',
            type: {
              name: 'String'
            }
          },
          subtitle: {
            required: false,
            serializedName: 'subtitle',
            type: {
              name: 'String'
            }
          },
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          images: {
            required: false,
            serializedName: 'images',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CardImageElementType',
                  type: {
                    name: 'Composite',
                    className: 'CardImage'
                  }
              }
            }
          },
          buttons: {
            required: false,
            serializedName: 'buttons',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CardActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'CardAction'
                  }
              }
            }
          },
          tap: {
            required: false,
            serializedName: 'tap',
            type: {
              name: 'Composite',
              className: 'CardAction'
            }
          }
        }
      }
    };
  }
}

module.exports = ThumbnailCard;
