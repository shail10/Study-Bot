const _get = require('lodash/get')
const { STUDY_CATEGORY_IDS } = require('../../constants/general.constants')
const { STUDY_ROLE_ID } = require('../../constants/general.constants')

const { GENERAL_CONSTANTS } = require('../constants/events.constants')

module.exports = {
  handleVoiceStateUpdate: async (oldState, newState) => {
    const member =
      _get(newState, GENERAL_CONSTANTS.MEMBER, {}) ||
      _get(oldState, GENERAL_CONSTANTS.MEMBER, {})

    const joinedChannel = _get(newState, GENERAL_CONSTANTS.CHANNEL, {})
    const joinedChannelCategoryId = _get(
      joinedChannel,
      GENERAL_CONSTANTS.PARENT_ID
    )

    const leftChannel = _get(oldState, GENERAL_CONSTANTS.CHANNEL, {})
    const leftChannelCategoryId = _get(leftChannel, GENERAL_CONSTANTS.PARENT_ID)

    let membersRoles = _get(member, GENERAL_CONSTANTS.ROLES, {})
    const cachedRoles = _get(membersRoles, GENERAL_CONSTANTS.CACHE, {})

    if (joinedChannel && STUDY_CATEGORY_IDS.includes(joinedChannelCategoryId)) {
      if (!cachedRoles.has(STUDY_ROLE_ID)) {
        await membersRoles.add(STUDY_ROLE_ID)
      }
    } else if (
      leftChannel &&
      STUDY_CATEGORY_IDS.includes(leftChannelCategoryId)
    ) {
      if (cachedRoles.has(STUDY_ROLE_ID)) {
        await membersRoles.remove(STUDY_ROLE_ID)
      }
    }
  },
}
