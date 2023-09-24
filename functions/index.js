/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const cors = require('cors')({origin: true});
const fs = require('fs');
const uuid = require('uuid-v4');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
  projectId: 'instaclone-1cd6e',
  keyFilename: 'instaClone.json',
});
exports.uploadImage = onRequest((request, response) => {
  cors(request, response, () => {});
});
