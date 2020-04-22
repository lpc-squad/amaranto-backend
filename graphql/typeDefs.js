const path = require("path");
const { fileLoader, mergeTypes } = require("merge-graphql-schemas");

const typesArray = fileLoader(path.join(__dirname, "./types"));
console.log(typesArray);

module.exports = mergeTypes(typesArray, { all: true });
