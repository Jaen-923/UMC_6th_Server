
// dtos/MissionChallengeDTO.js

// import Joi from 'joi';

// export default class MissionChallengeDTO {
//   static challengeMissionSchema = Joi.object({
//     member_id: Joi.number().required(),
//     mission_id: Joi.number().required(),
//     store_id: Joi.number().required(),
//     reward: Joi.number().required(),
//     mission_spec: Joi.string().required()
//   });
// }
// dtos/MissionChallengeDTO.js

import Joi from 'joi';

export default class MissionChallengeDTO {
  static challengeMissionSchema = Joi.object({
    member_id: Joi.number().required(),
    mission_id: Joi.number().required()
  });
}