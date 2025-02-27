import mongoose from "mongoose";
import colors from "colors";
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errror in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
