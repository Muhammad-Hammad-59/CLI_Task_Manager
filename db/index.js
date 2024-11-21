import mongoose from "mongoose";

async function dbconnection(){
    try {
      const response= await mongoose.connect(`${process.env.MONGODB_URI}/taskmaneger`).then(()=>{
            console.log("Database connection success")
        })

    } catch (error) {
        console.log(`Database connection error!! ${error.message}`)
    }
}

async function dbdisconnect(){
    try {
       await mongoose.disconnect()
       console.log("database is disconnected");
    } catch (error) {
        console.log('database disconnection have error:',error.message)
    }
}

export { dbconnection ,dbdisconnect} 