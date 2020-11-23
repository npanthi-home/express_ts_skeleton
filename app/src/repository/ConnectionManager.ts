import mongoose, { Mongoose } from "mongoose";
export default class ConnectionManager {
  connection: Mongoose;

  private constructor(connection: Mongoose) {
    this.connection = connection;
  }

  getConnection() {
      return this.connection;
  }

  //CXthbK8X6jVRZzR root
  static async createConnection() {
    const connection = await mongoose.connect(
      "mongodb+srv://root:CXthbK8X6jVRZzR@cluster0.vmlss.mongodb.net/nodets?retryWrites=true&w=majority",
    //   "mongodb://root:CXthbK8X6jVRZzR@localhost:27017/nodets",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Connected to Mongo");
      }
    );

    return new ConnectionManager(connection);
  }
}
