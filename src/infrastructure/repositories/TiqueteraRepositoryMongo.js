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

    // Buscamos el documento por su ID
    const tiquetera = await TiqueteraModel.findById(id);
    
    if (!tiquetera) {
      throw new Error('Tiquetera no encontrada');
    }

    // Aumentamos el campo totalTransacciones en 1
    tiquetera.totalTransacciones += 1;

    // Actualizamos el resto de los campos (nrotiquetera, cliente, saldo)
    tiquetera.nrotiquetera = nrotiquetera;
    tiquetera.cliente = cliente;
    tiquetera.saldo = saldo;
    tiquetera.observaciones = observaciones

    // Guardamos los cambios en la base de datos
    return await tiquetera.save();
  }

  async delete(id) {
    return await TiqueteraModel.findByIdAndDelete(id);
  }
}

export default TiqueteraRepositoryMongo;
