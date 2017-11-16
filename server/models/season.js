const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
  seasonName: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  startDate: String,
  endDate: String,
  description: String
});

mongoose.model("season", SeasonSchema);
