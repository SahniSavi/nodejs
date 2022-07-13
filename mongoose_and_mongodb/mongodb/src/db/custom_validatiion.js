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
//         required: true,
//         unique: true,
//         lowercase : true,
//         trim: true,
//         minlength: [2,"minimum 2 letters"],
//         maxlength :30
//     },
//     ctype : {
//         type : String,
//         required : true,
//         lowercase : true,
//         enum:["frontend","backend","database"]
//     },
//     videos :{
//         type : Number,
//         validate(value){
//             if(value < 0){
//                 throw new Error("videos count should not be negative")
//             }
//         }


//     },
//     active: Boolean
// })

// const playlist = new mongoose.model("Playlist", playlistSchema);

// const createDocument = async () => {
//     try {
//         const reactPlaylist = new playlist({
//             name: "no_SQL",
//             ctype: "database",
//             videos: 10,
//             author: "sahni",
//             active: true
//         })
//         const result = await reactPlaylist.save();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// createDocument();