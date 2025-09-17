import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
    nrotiquetera: Number,
    cliente: String,
    saldo: Number,
    totalTransacciones: Number
  });

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema);
let totalTransacciones = 0

class TiqueteraRepositoryMongo {

  async create(tiqueteraData) {
    const tiquetera = new TiqueteraModel(tiqueteraData);
    return await tiquetera.save();
  }

  async findAll(){
    return await TiqueteraModel.find();
  }

  async findById(id){
    return await TiqueteraModel.findById(id);
  }

  async update(id, tiqueteraData) {
    const {nrotiquetera, cliente, saldo} = tiqueteraData
    totalTransacciones++

    const data = { nrotiquetera, cliente, saldo, totalTransacciones }
    return await TiqueteraModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }
};

export default TiqueteraRepositoryMongo;

