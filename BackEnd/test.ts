import DataSource from "./src/configs/data-source";
import Album from "./src/models/album.model";
import Artist from "./src/models/artist.model";
import Genre from "./src/models/genre.model";
import Playlist from "./src/models/playlist.model";
import Song from "./src/models/song.model";
import Subscription from "./src/models/subscription.model";
import SubscriptionDetail from "./src/models/subscriptionDetail.model";
import User from "./src/models/user.model";

DataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});


const albumRepository = DataSource.getRepository(Album);
const artistRepository = DataSource.getRepository(Artist);
const genreRepository = DataSource.getRepository(Genre);
const playlistRepository = DataSource.getRepository(Playlist);
const songRepository = DataSource.getRepository(Song);
const subscriptionRepository = DataSource.getRepository(Subscription);
const subscriptiondetailRepository = DataSource.getRepository(SubscriptionDetail);
const userRepository = DataSource.getRepository(User);
