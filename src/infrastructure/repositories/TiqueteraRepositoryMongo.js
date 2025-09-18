import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
  nrotiquetera: Number,
  cliente: String,
  saldo: Number,
  totalTransacciones: Number,
  observaciones: String
});

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema);

class TiqueteraRepositoryMongo {

  async create(tiqueteraData) {
    const tiquetera = new TiqueteraModel(tiqueteraData);
    return await tiquetera.save();
  }

  async findAll() {
    return await TiqueteraModel.find();
  }

  async findById(id) {
    return await TiqueteraModel.findById(id);
  }

  async update(id, tiqueteraData) {
    const { nrotiquetera, cliente, saldo ,observaciones} = tiqueteraData;

    const tiquetera = await TiqueteraModel.findById(id);
    
    if (!tiquetera) {
      throw new Error('Tiquetera no encontrada');
    }

    tiquetera.totalTransacciones += 1;

    tiquetera.nrotiquetera = nrotiquetera;
    tiquetera.cliente = cliente;
    tiquetera.saldo = saldo;
    tiquetera.observaciones = observaciones

    return await tiquetera.save();
  }

  async delete(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }
}

export default TiqueteraRepositoryMongo;
