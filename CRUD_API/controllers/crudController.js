import studentModel from "../models/crudsSchema.js";

const createNewRecords = async (req, res) => {
  try {

    const { name, city, fees, age } = req.body

    const data = await studentModel({
      name: name,
      age: age,
      city: city,
      fees: fees
    })
    if (data) {
      await data.save()
      console.log("new record cereated");
    }
    res.send(data)

  } catch (error) {
    console.log(error.message);
  }
};


const getAllRecord = async (req, res) => {

  try {
    const data = await studentModel.find({})
    res.send(data)
    
  } catch (error) {
    console.log(error.message);
    
  }


  res.send("get all records");
};

const readRecordsById = (req, res) => {
  res.send("Read record by id");
};

const updateRecordsById = (req, res) => {
  res.send("update record By Id");
};

const deleteRecordsById = (req, res) => {
  res.send("Delete Record By Id");
};

export { createNewRecords, getAllRecord, readRecordsById, updateRecordsById, deleteRecordsById };
