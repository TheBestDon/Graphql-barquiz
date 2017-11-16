const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLList } = graphql;
const UserType = require("./user_type");
const SeasonType = require("./season_type");
const Season = mongoose.model("season");
const User = mongoose.model("user");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
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
