const Joi = require('joi')

module.exports = Joi.object({
  branch: Joi.string()
    .meta({ label: 'Branch' })
    .description('The name of the branch to remove protection from. This defaults to `master`.')
    .default('master')
})
