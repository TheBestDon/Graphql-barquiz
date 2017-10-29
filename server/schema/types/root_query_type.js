const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = graphql;
const UserType = require("./user_type");
const SeasonType = require("./season_type");
const Season = mongoose.model("season");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    season: {
      type: SeasonType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Season.findById(id);
      }
    }
  })
});

module.exports = RootQueryType;
