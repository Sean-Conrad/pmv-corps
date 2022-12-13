//require
const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const TestContractSchema = new Schema({
    
    name: String,
    address: String,
    phone: String,
    email: String,
    subject: String,
    message: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//model
const TestContract = mongoose.model('TestContract', TestContractSchema);

const data = {
    name: "Joffrey Doe",
    address: "7000 Jofdoe Lane",
    phone: "222-222-2228",
    email: "joffdoe@gmail.com",
    subject: "Joff's Subject",
    message: "Here is Joff's really short message!",
};

module.exports = TestContract;