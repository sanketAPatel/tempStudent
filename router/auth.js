const router=require('express').Router();
const Student =require('../model/Student')

router.get('/login',(req,res)=>{

    res.send('get request');
});


router.get('/',(req,res)=>{

    //res.send('this is home request');
    res.send(req.body);
})



//post request to register a student.
router.post('/register',async(req,res)=>{
        const student= new Student({
            //personal
           name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            age :req.body.age,
            experience : req.body,
            address:req.body,
           education:req.body
         
            
            
        });

     
                try{
                //  let userStr = JSON.stringify(student);
        // let stdObject= JSON.parse(userStr)
                             const saveStudent= await student.save();
                             res.send(saveStudent);
                }
                catch(err){
                        res.status(400).send(err);
                }
   
})


module.exports =router;