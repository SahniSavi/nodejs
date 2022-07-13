// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/firstdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => { console.log("connection sussessful") })
//     .catch((err) => { console.log("no connection", err) });

// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     type: String,
//     videos: Number,
//     active: Boolean
// })

// const playlist = new mongoose.model("Playlist", playlistSchema);
// const deleteDocumet = async (_id) => {
//     try {
//         const result = await playlist.findByIdAndDelete({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err)
//     }
// }
// deleteDocumet("62bdd2004a3ee2b64c1418ca");