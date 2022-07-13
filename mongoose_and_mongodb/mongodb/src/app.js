const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
require("./db/insert");
require("./db/insert_multiple");
require("./db/read");
require("./db/comparision");
require("./db/logical");
require("./db/sorting");
require("./db/update");
require("./db/delete");
require("./db/Built-In_Validation");
require("./db/custom_validatiion");
require("./db/email_validator");
const port  = process.env.PORT ||  3000;

app.listen(port, () => {
    console.log(`server is running ar port no ${port}`);
})

