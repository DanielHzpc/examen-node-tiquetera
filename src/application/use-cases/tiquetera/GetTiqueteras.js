export default class GetTiqueteras {
    constructor(tiqueteraRepository) {
      this.tiqueteraRepository = tiqueteraRepository;
    }
  
    async execute() {
      return await this.tiqueteraRepository.findAll();
    }
}

