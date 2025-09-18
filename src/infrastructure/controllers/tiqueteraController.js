import CreateTiquetera from "../../application/use-cases/tiquetera/CreateTiquetera.js";
import GetTiqueteraById from "../../application/use-cases/tiquetera/GetTiqueteraById.js";
import GetTiqueteras from "../../application/use-cases/tiquetera/GetTiqueteras.js";
import UpdateTiquetera from "../../application/use-cases/tiquetera/UpdateTiquetera.js";
import DeleteTiquetera from "../../application/use-cases/tiquetera/DeleteTiquetera.js";


import TiqueteraRepositoryMongo from "../repositories/TiqueteraRepositoryMongo.js";

const tiqueteraRepository = new TiqueteraRepositoryMongo();
export const createTiquetera = async (req, res) => {
  try {
    const createTiquetera = new CreateTiquetera(tiqueteraRepository);
    const tiquetera = await createTiquetera.execute(req.body);
    res.status(201).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getTiqueteras = async (req, res) => {
  try {
    const getTiqueteras = new GetTiqueteras(tiqueteraRepository);
    const tiquetera = await getTiqueteras.execute();
    res.status(200).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTiqueteraById = async (req, res) => {
  try {
    const getTiqueteraById = new GetTiqueteraById(tiqueteraRepository);
    const tiquetera = await getTiqueteraById.execute(req.params.id);
    res.status(200).json(tiquetera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateTiquetera = async (req, res) => {
    try {
        const updateTiquetera = new UpdateTiquetera(tiqueteraRepository);

        const tiqueteraActualizada = await updateTiquetera.execute(req.params.id, req.body);


        if (!tiqueteraActualizada) {
            // Si el resultado es null, significa que el ID no se encontró
            return res.status(404).json({ error: "Tiquetera no encontrada" });
        }

        // Si se actualizó correctamente, respondemos con el objeto actualizado
        res.status(200).json(tiqueteraActualizada);
    } catch (err) {
        // Si da error, mensaje 500
        res.status(500).json({ error: err.message });
    }
};


export const deleteTiquetera = async (req, res) => {
    try {
        const deleteTiquetera = new DeleteTiquetera(tiqueteraRepository);
        const eliminado = await deleteTiquetera.execute(req.params.id);

        if (!eliminado) {
            return res.status(404).json({ message: "Tiquetera no encontrada o ya eliminada" });
        }
        
        // Si la eliminación fue exitosa, responde con 204 No Content
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


