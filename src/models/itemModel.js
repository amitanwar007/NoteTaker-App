const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ItemSchema = new Schema({ item: { type: String, required: true } });
const ItemColl = mongoose.model("Items", ItemSchema);
module.exports = ItemColl;

console.log("hey Amit");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");
console.log("Added new console.");