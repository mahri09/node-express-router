const express  = require('express')
const users = require("./routes/api/users")


const app = express();

app.use(express.json());

// app.use(express.urlencoded({ extended: false }));


app.use("/api/users", users);
// app.use(app.router);
// users.initialize(app);


app.listen(port=3000,() => console.log(`Server started at port ${port}`))