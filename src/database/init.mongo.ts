import mongoose, { ConnectOptions } from "mongoose";

const userName = "luanht21it";
const password = "@password27";
const cluster = "cluster0";
const databaseName = "dgu-extension";

const connectString = `mongodb+srv://luanht21it:hoangtheluan123@cluster0.xuza17y.mongodb.net/dgu-extension?retryWrites=true&w=majority`;

class Database {
    private static instance: Database;

    private constructor() {
        this.connect();
    }

    private connect() {
        mongoose.set("debug", true);
        mongoose.set("debug", { color: true });
        mongoose
            .connect(connectString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
            .then(() => {
                console.log("Connected to MongoDB successfully");
            })
            .catch((err) => {
                console.error("Error connecting to MongoDB:", err);
            });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
