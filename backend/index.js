const express = require('express');
const { userRouter } = require('./routes/userRouter');
const { adminRouter } = require('./routes/adminRouter');

app.use(express.json());
app.use(cors());

const app = express();
const port = 3000;

//userRoute
app.get("/api/v1/user",userRouter);
//adminRoute
app.get("/api/v2/admin",adminRouter);

app.listen(3000);