const { NotFoundError } = require('../../helpers/errors')
const {Notice} = require('../../models/noticesModel')

const getNoticeByCategory = async (categoryName) => {
  const notices = await Notice.find({category: categoryName})
  if (!notices || notices.length === 0) {
    throw new NotFoundError('Not found')
    }
    return notices
}

module.exports = {
    getNoticeByCategory
}