export default class CreateTiquetera {
    constructor(tiqueteraRepository) {
      this.tiqueteraRepository = tiqueteraRepository;
    }
  
    async execute(tiqueteraData) {
      return await this.tiqueteraRepository.create(tiqueteraData);
    }
}
