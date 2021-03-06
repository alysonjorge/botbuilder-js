/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the Activity class.
 * @constructor
 * An Activity is the basic communication type for the Bot Framework 3.0
 * protocol
 *
 * @member {string} [type] The type of the activity
 * [message|contactRelationUpdate|converationUpdate|typing|endOfConversation|event|invoke]
 *
 * @member {string} [id] ID of this activity
 *
 * @member {date} [timestamp] UTC Time when message was sent (set by service)
 *
 * @member {date} [localTimestamp] Local time when message was sent (set by
 * client, Ex: 2016-09-23T13:07:49.4714686-07:00)
 *
 * @member {string} [serviceUrl] Service endpoint where operations concerning
 * the activity may be performed
 *
 * @member {string} [channelId] ID of the channel where the activity was sent
 *
 * @member {object} [from] Sender address
 *
 * @member {string} [from.id] Channel id for the user or bot on this channel
 * (Example: joe@smith.com, or @joesmith or 123456)
 *
 * @member {string} [from.name] Display friendly name
 *
 * @member {object} [conversation] Conversation
 *
 * @member {boolean} [conversation.isGroup] Is this a reference to a group
 *
 * @member {string} [conversation.id] Channel id for the user or bot on this
 * channel (Example: joe@smith.com, or @joesmith or 123456)
 *
 * @member {string} [conversation.name] Display friendly name
 *
 * @member {object} [recipient] (Outbound to bot only) Bot's address that
 * received the message
 *
 * @member {string} [recipient.id] Channel id for the user or bot on this
 * channel (Example: joe@smith.com, or @joesmith or 123456)
 *
 * @member {string} [recipient.name] Display friendly name
 *
 * @member {string} [textFormat] Format of text fields [plain|markdown]
 * Default:markdown
 *
 * @member {string} [attachmentLayout] Hint for how to deal with multiple
 * attachments: [list|carousel] Default:list
 *
 * @member {array} [membersAdded] Array of address added
 *
 * @member {array} [membersRemoved] Array of addresses removed
 *
 * @member {string} [topicName] Conversations new topic name
 *
 * @member {boolean} [historyDisclosed] True if the previous history of the
 * channel is disclosed
 *
 * @member {string} [locale] The language code of the Text field
 *
 * @member {string} [text] Content for the message
 *
 * @member {string} [speak] SSML Speak for TTS audio response
 *
 * @member {string} [inputHint] Indicates whether the bot is accepting,
 * expecting, or ignoring input
 *
 * @member {string} [summary] Text to display if the channel cannot render
 * cards
 *
 * @member {object} [suggestedActions] SuggestedActions are used to provide
 * keyboard/quickreply like behavior in many clients
 *
 * @member {array} [suggestedActions.to] Ids of the recipients that the actions
 * should be shown to.  These Ids are relative to the channelId and a subset of
 * all recipients of the activity
 *
 * @member {array} [suggestedActions.actions] Actions that can be shown to the
 * user
 *
 * @member {array} [attachments] Attachments
 *
 * @member {array} [entities] Collection of Entity objects, each of which
 * contains metadata about this activity. Each Entity object is typed.
 *
 * @member {object} [channelData] Channel-specific payload
 *
 * @member {string} [action] ContactAdded/Removed action
 *
 * @member {string} [replyToId] The original ID this message is a response to
 *
 * @member {object} [value] Open-ended value
 *
 * @member {string} [name] Name of the operation to invoke or the name of the
 * event
 *
 * @member {object} [relatesTo] Reference to another conversation or activity
 *
 * @member {string} [relatesTo.activityId] (Optional) ID of the activity to
 * refer to
 *
 * @member {object} [relatesTo.user] (Optional) User participating in this
 * conversation
 *
 * @member {string} [relatesTo.user.id] Channel id for the user or bot on this
 * channel (Example: joe@smith.com, or @joesmith or 123456)
 *
 * @member {string} [relatesTo.user.name] Display friendly name
 *
 * @member {object} [relatesTo.bot] Bot participating in this conversation
 *
 * @member {string} [relatesTo.bot.id] Channel id for the user or bot on this
 * channel (Example: joe@smith.com, or @joesmith or 123456)
 *
 * @member {string} [relatesTo.bot.name] Display friendly name
 *
 * @member {object} [relatesTo.conversation] Conversation reference
 *
 * @member {boolean} [relatesTo.conversation.isGroup] Is this a reference to a
 * group
 *
 * @member {string} [relatesTo.conversation.id] Channel id for the user or bot
 * on this channel (Example: joe@smith.com, or @joesmith or 123456)
 *
 * @member {string} [relatesTo.conversation.name] Display friendly name
 *
 * @member {string} [relatesTo.channelId] Channel ID
 *
 * @member {string} [relatesTo.serviceUrl] Service endpoint where operations
 * concerning the referenced conversation may be performed
 *
 * @member {string} [code] Code indicating why the conversation has ended
 *
 */
class Activity {
  constructor() {
  }

  /**
   * Defines the metadata of Activity
   *
   * @returns {object} metadata of Activity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Activity',
      type: {
        name: 'Composite',
        className: 'Activity',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'String'
            }
          },
          localTimestamp: {
            required: false,
            serializedName: 'localTimestamp',
            type: {
              name: 'String'
            }
          },
          serviceUrl: {
            required: false,
            serializedName: 'serviceUrl',
            type: {
              name: 'String'
            }
          },
          channelId: {
            required: false,
            serializedName: 'channelId',
            type: {
              name: 'String'
            }
          },
          from: {
            required: false,
            serializedName: 'from',
            type: {
              name: 'Composite',
              className: 'ChannelAccount'
            }
          },
          conversation: {
            required: false,
            serializedName: 'conversation',
            type: {
              name: 'Composite',
              className: 'ConversationAccount'
            }
          },
          recipient: {
            required: false,
            serializedName: 'recipient',
            type: {
              name: 'Composite',
              className: 'ChannelAccount'
            }
          },
          textFormat: {
            required: false,
            serializedName: 'textFormat',
            type: {
              name: 'String'
            }
          },
          attachmentLayout: {
            required: false,
            serializedName: 'attachmentLayout',
            type: {
              name: 'String'
            }
          },
          membersAdded: {
            required: false,
            serializedName: 'membersAdded',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChannelAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChannelAccount'
                  }
              }
            }
          },
          membersRemoved: {
            required: false,
            serializedName: 'membersRemoved',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ChannelAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ChannelAccount'
                  }
              }
            }
          },
          topicName: {
            required: false,
            serializedName: 'topicName',
            type: {
              name: 'String'
            }
          },
          historyDisclosed: {
            required: false,
            serializedName: 'historyDisclosed',
            type: {
              name: 'Boolean'
            }
          },
          locale: {
            required: false,
            serializedName: 'locale',
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
          speak: {
            required: false,
            serializedName: 'speak',
            type: {
              name: 'String'
            }
          },
          inputHint: {
            required: false,
            serializedName: 'inputHint',
            type: {
              name: 'String'
            }
          },
          summary: {
            required: false,
            serializedName: 'summary',
            type: {
              name: 'String'
            }
          },
          suggestedActions: {
            required: false,
            serializedName: 'suggestedActions',
            type: {
              name: 'Composite',
              className: 'SuggestedActions'
            }
          },
          attachments: {
            required: false,
            serializedName: 'attachments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AttachmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'Attachment'
                  }
              }
            }
          },
          entities: {
            required: false,
            serializedName: 'entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EntityElementType',
                  type: {
                    name: 'Composite',
                    className: 'Entity'
                  }
              }
            }
          },
          channelData: {
            required: false,
            serializedName: 'channelData',
            type: {
              name: 'Object'
            }
          },
          action: {
            required: false,
            serializedName: 'action',
            type: {
              name: 'String'
            }
          },
          replyToId: {
            required: false,
            serializedName: 'replyToId',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          relatesTo: {
            required: false,
            serializedName: 'relatesTo',
            type: {
              name: 'Composite',
              className: 'ConversationReference'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Activity;
