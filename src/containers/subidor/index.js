require("babel-register");
module.exports = require("./lib/index").default;
/*
const functions = require("firebase-functions");
const gcs = require("@google-cloud/storage")();
const os = require("os");
const path = require("path");
const spawn = require("child-process-promise").spawn;

exports.onFileChange = functions.storage.object().onChange(event => {});

exports.uploadFile = functions.https.onRequest((req, res) => {
  res.status(200).json({
    message: "funciona"
  });
});
*/
