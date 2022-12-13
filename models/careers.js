//require
const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const TestCareerSchema = new Schema({
    
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    reasonsNotAble: String,
    workExperience: String,
    certifications: String,
    medicalConditions: String,
    languages: String,
    expectedPay: String,
    currentlyEmployed: String,
    canWorkInUS: String,
    workedWithUsBefore: String,
    canLiftAboveFifty: String,
    liscenceAndVehicle: String,
    willingToTravel: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//model
const TestCareer = mongoose.model('TestCareer', TestCareerSchema);

const data = {
    firstName: "Jackson",
    lastName: "Jackinson",
    email: "jackson@gmail.com",
    phone: "333-333-3338",
    address: "723 Jackson Blvd",
    city: "Jacksonville",
    state: "Jacksonsota",
    postalCode: "12345",
    reasonsNotAble: "none",
    workExperience: "none",
    certifications: "Scissor Lift Certified",
    medicalConditions: "none",
    languages: "english, spanish",
    expectedPay: "21/hr",
    currentlyEmployed: "no",
    canWorkInUS: "yes",
    workedWithUsBefore: "no",
    canLiftAboveFifty: "yes",
    liscenceAndVehicle: "yes",
    willingToTravel: "yes",
};

module.exports = TestCareer;