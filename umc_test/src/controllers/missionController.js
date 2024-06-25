// controllers/missionController.js

import Mission from '../models/mission.js';

export const addMission = async (req, res) => {
  const { store_id, reward, mission_spec } = req.body;

  try {
    // Create mission in the database
    const newMission = await Mission.create({
      store_id,
      reward,
      mission_spec
    });

    res.status(201).json({
      status: 201,
      isSuccess: true,
      data: newMission,
      message: 'Mission added successfully.'
    });
  } catch (error) {
    console.error('Error adding mission:', error);
    res.status(500).json({
      status: 500,
      isSuccess: false,
      message: 'Server error, please contact administrator.'
    });
  }
};
