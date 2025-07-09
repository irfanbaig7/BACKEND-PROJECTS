const getAllRecord = (req, res) => {
  res.send("get all Details and satisfication");
};

const createNewRecords = (req, res) => {
  res.send("get all Create Records");
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
