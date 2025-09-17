import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
    nrotiquetera: Number,
    cliente: String,
    saldo: Number,
    totalTransacciones: Number
  });

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema);

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
      return await TiqueteraModel.findByIdAndUpdate(id, tiqueteraData, { new: true });
  }

  async delete(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }
};

export default TiqueteraRepositoryMongo;

