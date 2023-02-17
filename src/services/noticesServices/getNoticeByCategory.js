const {HttpError } = require('../../helpers/errors')
const {Notice} = require('../../models/noticesModel')

const getNoticeByCategory = async (categoryName) => {
 
  const notices = await Notice.find({category: categoryName})
  if (!notices || notices.length === 0) {
    throw new HttpError(400, 'Notices not found')
    }
    return notices
}

module.exports = {
    getNoticeByCategory
}