const getAllRecord = (req, res) => {
  res.send("get all Details and satisfication");
};

const createNewRecords = (req, res) => {
  res.send("get all Create Records");
};

const readRecordsById = (req, res) => {
  res.send("Read record by id");
};

export { createNewRecords, getAllRecord, readRecordsById };
