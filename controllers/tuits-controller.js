import * as tuitsDao from "../tuits/tuits-dao.js";

const findAllTuits = async(req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  // console.log("tuits: " + tuits)
  res.json(tuits);
}

const createTuit = async(req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(newTuit);
}
const updateTuit = async(req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.sendStatus(200);
}

const deleteTuit = async(req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(200);
}


export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}