const mongoose = require('mongoose');
const Appointment = require('../models/appointment');

/**
 * @description        Posts appointment data to the database.
 * @route              POST /
 * @access             Public
 */
const createAppointment = async (req, res) => {
  try {
    const { name, email, contact, date } = req.body;
    const appointment = await Appointment.create({
      name,
      email,
      contact,
      date,
    });
    res.status(201).json(appointment);
  } catch (error) {
    console.error('Failed to create appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment.' });
  }
};

module.exports = createAppointment;
