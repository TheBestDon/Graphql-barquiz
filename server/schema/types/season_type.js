const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const Season = mongoose.model("season");

const SeasonType = new GraphQLObjectType({
  name: "SeasonType",
  fields: () => ({
    id: { type: GraphQLID },
    seasonName: { type: GraphQLString },
    user: {
      type: require("./user_type"),
      resolve(parentValue) {
        return Season.findById(parentValue)
          .populate("user")
          .then(season => {
            return season.user;
          });
      }
    },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = SeasonType;
