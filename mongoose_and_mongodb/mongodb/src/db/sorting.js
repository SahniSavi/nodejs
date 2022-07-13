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
//     })

// const playlist = new mongoose.model("Playlist", playlistSchema);

// const getDocument = async() =>{
// const result = await playlist
// // // using count
// // .find({$and : [{author: "savita"},{videos: 50}]})
// // .select({author:1})
// // .countDocuments();

// // using shoting method
// .find({name: "node js"})
// .select({author:1})
// .sort({author : 1});

// console.log(result);
// }
// getDocument();


