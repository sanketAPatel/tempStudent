const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  experience: [
    {
      title: {
        type: String,
        // require :true
      },
      company: {
        type: String,
        //require :true
      },
      duration: {
        type: Number,
        // require :true
      },
    },
  ],
});

const addressSchema = new mongoose.Schema({
  address: [
    {
      streetNumber: {
        type: String,
      },
      city: {
        type: String,
      },
      phone: {
        type: Number,

        Max: 10,
      },
    },
  ],
});
//-----------------

const educationSchema= new mongoose.Schema({
education :[
    {
        degree:{type: String},
        passingYear:{type:Number}
    }
]

});


//-------------




const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
  },

  age: {
    type: Number,
  },
  //const dob= moment(date).format('MM-DD-YYYY');

  experience: [experienceSchema],
  address: [addressSchema],
  education:[educationSchema]
 
});
module.exports = mongoose.model("Student", studentSchema);
