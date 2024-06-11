const mongoose = require ("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing")

const Mongo_URL = 'mongodb://127.0.0.1:27017/TrekJet';

main()
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(Mongo_URL);
}


const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj, owner: "6663039cc8184b9f5b678424",
    }))
    await Listing.insertMany(initData.data);
    console.log("data was initilized");
};

initDB();


