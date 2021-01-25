const mongoose = require('../db/connection');

const recordingSchema = new mongoose.Schema(
	{
		videoUrl: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', recordingSchema);
