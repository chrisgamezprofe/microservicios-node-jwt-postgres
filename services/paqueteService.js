const uuid = require('uuid');

const customResponse = require('../utils/constants');

class PaqueteService {
    constructor(paqueteRepo) {
        this.paqueteRepo = paqueteRepo;
    }

    async addPaquete(req) {
        const {nombre_producto,
          compania_envio,
          direccion_envio,usuarioId} = req.body;
        const codigo_seguimiento = `${uuid.v4()}-${usuarioId}`;
        const fecha = new Date()

        const response = {};

        if (
          !nombre_producto ||
          !compania_envio ||
          !direccion_envio ||
          !usuarioId
        ) {
          response.message = customResponse.reqValidationError.message;
          response.statusCode = customResponse.reqValidationError.statusCode;
          return response;
        }

        const paquete = await this.paqueteRepo.addPaquete(
          nombre_producto,
          codigo_seguimiento,
          compania_envio,
          direccion_envio,
          fecha,
          usuarioId
        );

        if (!paquete) {
            response.message = customResponse.serverError.message;
            response.statusCode = customResponse.serverError.statusCode;
            return response;
        }

        response.message = customResponse.reqCreated.message;
        response.statusCode = customResponse.reqCreated.statusCode;
        response.data = paquete;

        return response;

    }

    async getAllPaquetes() {

        const response = {};

        const paquetes = await this.paqueteRepo.getAllPaquetes();

        if (!paquetes) {
            response.message = customResponse.recordNotFound.message;
            response.statusCode = customResponse.recordNotFound.statusCode;
            return response;
          }
        response.message = customResponse.success.message;
        response.statusCode = customResponse.success.statusCode;
        response.data = paquetes;

        return response;
    }


    async getPaquetesById(req) {
        const response = {};
        const { uuid } = req.params;
    
        const paquete = await this.paqueteRepo.getPaquetesById(uuid);
        if (!paquete) {
          response.message = customResponse.recordNotFound.message;
          response.statusCode = customResponse.recordNotFound.statusCode;
          return response;
        }
        response.message = customResponse.success.message;
        response.statusCode = customResponse.success.statusCode;
        response.data = paquete;
        return response;
    }

    async updatePaqueteById(req) {
       
        const { name } = req.body;
        const { releaseDate } = req.body;
        const { authorName } = req.body;
    
        const response = {};
        const { uuid } = req.params;
        
        console.log('Updating record for id ' + uuid);
        const updatedPaquete = await this.paqueteRepo.updatePaqueteById(uuid, name, releaseDate, authorName);
        if (updatedPaquete === null) {
          response.message = customResponse.recordNotFound.message;
          response.statusCode = customResponse.recordNotFound.statusCode;
          return response;
        }
    
        response.message = customResponse.success.message;
        response.statusCode = customResponse.success.statusCode;
        response.data = updatedPaquete;
        return response;
    }

    async deletePaqueteById(req) {
        const response = {};
        const { uuid } = req.params;
    
        const deletedPaquete = await this.paqueteRepo.deletePaqueteById(uuid);
        if (!deletedPaquete) {
          response.message = customResponse.recordNotFound.message;
          response.statusCode = customResponse.recordNotFound.statusCode;
          return response;
        }
    
        response.message = customResponse.success.message;
        response.statusCode = customResponse.success.statusCode;
        return response;
      }

}

module.exports = {
    PaqueteService,
};