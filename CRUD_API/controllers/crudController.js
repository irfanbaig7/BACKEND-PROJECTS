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
    console.log("Get All Record");

  } catch (error) {
    console.log(error.message);

  }

};

const readRecordsById = async (req, res) => {

  try {
    const data = await studentModel.findById(req.params.id)
    res.send(data)
    console.log("Read record by id");
  } catch (error) {
    console.log(error.message);

  }

};

const updateRecordsById = async (req, res) => {

  try {
    const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
    res.send(result)
    console.log("Update Record By Id");
  } catch (error) {
    console.log(error.message);
  }

};

const deleteRecordsById = async (req, res) => {

  try {
    const deleteRec = await studentModel.findByIdAndDelete(req.params.id)
    res.send(deleteRec)
    console.log("Delete Record By Id");

  } catch (error) {
    console.log(error.message);

  }
};

export { createNewRecords, getAllRecord, readRecordsById, updateRecordsById, deleteRecordsById };
