const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string()
    .meta({ label: 'Name' })
    .description('The name of the project board.')
    .required(),
  description: Joi.string()
    .meta({ label: 'Description' })
    .description('The description of the project board.'),
  columns: Joi.array()
    .meta({ label: 'Columns' })
    .description('A list of columns to create.')
    .items(Joi.string())
    .min(1)
})
