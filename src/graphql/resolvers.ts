const path = require("path");
const { fileLoader, mergeResolvers } = require("merge-graphql-schemas");

const resolversArray = fileLoader(path.join(__dirname, "./resolvers"));

export default mergeResolvers(resolversArray);
