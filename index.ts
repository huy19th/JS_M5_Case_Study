import DataSource from "./src/configs/data-source";
import express from "express";
import dotenv from "dotenv";
import authRouter from "./src/routers/auth.router";

import adminSubscriptionRouter from "./src/routers/admin/subscription.router";

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT;

app.use('/api/auth', authRouter);
// app.use('/api/user', userRouter);
// app.use('/api/music', musicRouter);
// app.use('/api/playlist', playlistRouter);
// app.use('/api/admin', adminRouter);
// app.use('/api/subscription', subscriptionRouter);

app.use('/api/admin/subscription', adminSubscriptionRouter);

DataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

