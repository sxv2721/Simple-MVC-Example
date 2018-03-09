const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
    //name(string)
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    //breed(string)
    breed : {
        type : String,
        trim : true,
        required : true
    },
    //age(number)
    age : {
        type : Number,
        required : true
    },
    //createdDate(Date)
    createdDate : {
        type : Date,
        default : Date.now
    }
});

DogSchema.statics.sayName = (dog) => {
    console.log(dog);
};

DogSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };
    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;