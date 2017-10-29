const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const SeasonType = new GraphQLObjectType({
  name: "SeasonType",
  fields: () => ({
    id: { type: GraphQLID },
    seasonName: { type: GraphQLString },
    host: { type: GraphQLID },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = SeasonType;
