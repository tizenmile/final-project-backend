const express = require('express')
const router = express.Router()

const {asyncWrapper} = require('../../helpers/apiHelpers')
const {noticesControllers} = require('../../controllers')

router.get('/:category', asyncWrapper(noticesControllers.getNoticesByCategoryController))


module.exports = router

