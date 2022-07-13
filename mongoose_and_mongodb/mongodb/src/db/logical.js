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
//     ctype: String,
//     videos: Number,
//     author: String,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now   
//     }
// })

// const playlist = new mongoose.model("Playlist", playlistSchema);

// const getDocument = async() =>{
// const result = await playlist
// // $and using logical operator
// .find({$and : [{author: "savita"},{videos: 50}]})
// .select({author:1})
// // .limit(2);
// console.log(result);
// }
// getDocument();


