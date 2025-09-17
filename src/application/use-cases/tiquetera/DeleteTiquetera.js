export default class DeleteTiquetera {
   
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id) {
        return await this.tiqueteraRepository.delete(id);
    }
}