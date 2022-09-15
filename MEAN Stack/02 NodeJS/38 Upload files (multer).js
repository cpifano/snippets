//---------------------------------------------------------------------------------------------------------------------------//
// UPLOAD FILES - MULTER:
//---------------------------------------------------------------------------------------------------------------------------//
//Import modules:
const express = require('express');
const multer = require('multer');
const moment = require('moment');

//Set upload storage parameters:
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        //Set destination path:
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        //Set file name in the request:
        req.filename = moment().format('YYYYMMDD_HHmmss') + '_' file.originalname;

        //Execute callback:
        callback(null, req.filename);
    }
});

//Set server storage for uploads:
const upload = multer({ storage: storage });

//UPLOAD (Router):
router.post(
    '/upload',
    upload.single('uploaded_file'),
    (req, res) => {
        res.status(200).send({ file_uploaded: true, file_name: req.filename });
    }
);
//---------------------------------------------------------------------------------------------------------------------------//
