// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/firstdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => { console.log("connection sussessful") })
//     .catch((err) => { console.log("no connection", err) });


// // schema
// // A Mongoose schema defines the struture of the document,
// // default values, validatorrs, etc.,
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

// // A Mongoose model is a wrapper ont he Mongoose schema.
// //  A mongoose schema defines the structure of the document.
// // Create document of insert
// const playlist = new mongoose.model("Playlist", playlistSchema);
// const createDocument = async () => {
//     try {
//         const reactPlaylist = new playlist({
//             name: "node js",
//             ctype: "backend",
//             videos: 50,
//             author: "sahni",
//             active: true
//         })
//         const frontPlaylist = new playlist({
//             name: "node js",
//             ctype: "backend",
//             videos: 50,
//             author: "sahni",
//             active: true
//         })
//         const front2Playlist = new playlist({
//             name: "node js",
//             ctype: "backend",
//             videos: 50,
//             author: "sahni",
//             active: true
//         })
//         const result = await playlist.insertMany([reactPlaylist, frontPlaylist, front2Playlist])
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// // createDocument();

// const getDocument = async() =>{
// // const result = await playlist.find();
// // const result = await playlist.find({name:"node js"});
// // const result = await playlist.find({name:"node js"}).select({name:1})
// const result = await playlist.find({name:"node js"}).select({name:1}).limit(2);
// console.log(result);
// }

// getDocument();