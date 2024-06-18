// ReviewDTO.js

import Joi from 'joi';

export default class ReviewDTO {
  static createReviewSchema = Joi.object({
    id: Joi.number().required(),
    member_id: Joi.number().required(),
    store_id: Joi.number().required(),
    body: Joi.string().required(),
    score: Joi.number().integer().min(1).max(5).required()
  });
}

