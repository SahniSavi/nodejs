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
// const updateDocument = async (_id) => {
//     try {
//         const result = await playlist.findByIdAndUpdate({ _id }, {
//             $set: {
//                 name: "javascript"
//             }
//         }, {
//             new: true,
//             useFindAndModify: false
//         }
//         )
//         console.log(result);

//     } catch (err) {
//         console.log(err);
//     }
// }

// updateDocument("62bd5f6ff744e3c1688f2198");

