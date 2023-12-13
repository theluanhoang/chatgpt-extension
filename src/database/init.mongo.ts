import { ConnectOptions } from "mongoose";
import * as mongoose from "mongoose";
import { databaseName, userName, password, ip, port } from "@/configs/config.mongodb";

const connectString = `mongodb://${userName}:${password}@${ip}:${port}`;

console.log("Connection URL :", connectString);

class Database {
    private static instance: Database;
    constructor() {
        this.connect();
    }

    connect(type = "mongoose") {
        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true });
        }
        mongoose
            .connect(connectString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: databaseName,
            } as ConnectOptions)
            .then(() => {
                console.log("Connected MongoDB Success");
            })
            .catch((err) => console.log("Error Connect !!!"));
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
