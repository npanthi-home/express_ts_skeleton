import mongoose, { Mongoose } from "mongoose";
export default class ConnectionManager {
  connection: Mongoose;

  private constructor(connection: Mongoose) {
    this.connection = connection;
  }

  getConnection() {
      return this.connection;
  }

  static async createConnection() {
    const connection = await mongoose.connect(
      "mongodb+srv://root:CXthbK8X6jVRZzR@cluster0.vmlss.mongodb.net/nodets?retryWrites=true&w=majority",
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
