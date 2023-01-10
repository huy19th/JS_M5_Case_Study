import DataSource from "./src/configs/data-source";
import express from "express";
import dotenv from "dotenv";
import authRouter from "./src/routers/auth.router";
import songService from "./src/routers/admin/song.router"
import artistRouter from "./src/routers/admin/artist.router";
import albumRouter from "./src/routers/admin/album.router";
import adminSubscriptionRouter from "./src/routers/admin/subscription.router";
import checkAuthentication from "./src/middlewares/checkAuthentication";
import checkAuthorization from "./src/middlewares/checkAuthorization";

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT;

app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use(checkAuthentication);
app.use(checkAuthorization);
app.use('/api/admin/artist',artistRouter)
app.use('/api/admin/album',albumRouter);
// app.use('/api/user', userRouter);
// app.use('/api/music', musicRouter);
// app.use('/api/playlist', playlistRouter);
// app.use('/api/admin', adminRouter);
// app.use('/api/subscription', subscriptionRouter);
app.use('/api/admin/song', songService);
app.use('/api/admin/subscription', adminSubscriptionRouter);
app.use((err, req, res, next) => {
    console.log('error happened');
    next(err);
})

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

