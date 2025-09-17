export default class UpdateTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id, datosActualizados) {
        // Llama directamente al método 'update' del repositorio.
        const tiqueteraActualizada = await this.tiqueteraRepository.update(id, datosActualizados);

        // Opcional: verifica si la compra fue encontrada y actualizada.
        if (!tiqueteraActualizada) {
            console.warn(`No se encontró ninguna tiquetera con el id: ${id}`);
            return null; // Devuelve null si no se encontró
        }
        
        return tiqueteraActualizada;
    }
}