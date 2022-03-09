const mongoose =require('mongoose')

const experienceSchema= new mongoose.Schema({

    
         "experience":[
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
               
            }
}]
})




const studentSchema =new mongoose.Schema
({
  
        name: {
            type: String      
        },
        
        email: {
            type: String         
        },
        password: {
            type: String           
        },

        age: {
            type: Number         
        },       

        location: {
            type: String
                      
        },
        
            experience : [experienceSchema]
              
    
    });
module.exports=mongoose.model('Student',studentSchema);