const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
    //name(string)
    name : {
        type : string,
        required : true,
        trim : true,
        unique : true
    },
    //breed(string)
    breed : {
        type : string,
        trim : true,
        required : true
    },
    //age(number)
    age : {
        type : number,
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

dogModel = mongoose.model('Dog', DogSchema);

module.exports.dogModel = dogModel;
module.exports.dogSchema = DogSchema;