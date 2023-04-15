const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const requestSchema = new Schema ({
    owner: {  type: Schema.Types.ObjectId, ref: `User` },
    sender: {  type: Schema.Types.ObjectId, ref: `User` },
    projectInInterest: {  type: Schema.Types.ObjectId, ref: `Project` },
    message: String
});

module.exports = model("Request", requestSchema);