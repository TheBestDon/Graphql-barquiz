const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const SeasonType = require("./season_type");
const User = mongoose.model("user");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    seasons: {
      type: new GraphQLList(SeasonType),
      resolve(parentValue) {
        return User.findSeasons(parentValue.id);
      }
    }
  })
});

module.exports = UserType;
