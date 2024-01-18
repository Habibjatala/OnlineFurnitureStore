import mongoose from "mongoose";
//const URI = process.env.MONGOBD_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOBD_URI);
    console.log(`Conntected to the Mongodb Database `.bgMagenta.white);
  } catch (error) {
    console.log("Db connection  Failed ", error);
  }
};
export default connectDb;
