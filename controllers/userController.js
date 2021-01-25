const express = require('express');
const router = express.Router();


const multer = require('multer');

const upload = multer({
	limits: {fieldSize: 2 * 1024 * 1024}
});

const s3Files = require('../lib/s3Files');


const Recording = require('../models/Recordings');

router.post('/recordings', upload.single('videoUrl'), async (req, res, next) => {

	// console.log(req);
	console.log('/recordings route hit');
	try {
	
		const s3file = await s3Files(req.file);

	
		const recording = await Recording.create({
			...req.body,
			videoUrl: s3file
				? s3file.Location
				: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
		});
	
		res.json(recording);
	} catch (err) {

		next(err);
	}
});

module.exports = router;
