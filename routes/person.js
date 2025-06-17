const express = require("express");
const router = express.Router();

const Person = require("../models/person");

// Post the person
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data is connected to db");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error msg", err);
    res.status(500).json("Internal Server Error");
  }
});

// get the all person's data
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data is fetched from the database");
    res.status(200).send(data);
  } catch (err) {
    console.log("Error during fetching", err);
    res.status(500).send("Error while fetching data");
  }
});

// get specified person based on work type
router.get("/:work", async (req, res) => {
  try {
    const worktype = req.params.work;
    if (worktype == "chef" || worktype == "waiter" || worktype == "manager") {
      const data = await Person.find({ work: worktype });
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Error while finding user" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: " internal Server Error" });
  }
});

// Update operation using 'PUT' method
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPerson = req.body;
    const response = await Person.findByIdAndUpdate(personId, updatedPerson, {
      new: true,// new -true return the updated doc
      runValidators: true, // runValidators run the  mongoose validation
    });
    if (!response) {
      return res.status(404).json("Person not found" );
    }
    console.log("data updated using put");
    res.status(200).json(response);
  } 

  catch (err) {
    console.log(err);
    res.status(500).json({ err: " internal Server Error" });
  }
});


// Delete person using delete method
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id 
        const response=await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('Succesully Deleted the Person')
        res.status(200).json({message:'Sucessfully deleted The Person'})
    }
    catch(err){

        console.log(err)
        res.status(500).json('Internal Server Error')
    }
})
module.exports = router;
