const { PaqueteService } = require('../services/paqueteService');
const { PaqueteRepository} = require('../repository/paquete');

const PaqueteModel = require('../models/paquete');


const paqueteRepository = new PaqueteRepository(PaqueteModel);
const paqueteService = new PaqueteService(paqueteRepository);

exports.addPaquete = async (req, res, next) => {
    try {
        const response = await paqueteService.addPaquete(req);
        res.statusCode = response.statusCode;

        return res.json({message: response.message, data: response.data});
    } catch (error) {
        next (error);
    }
};


exports.getAllPaquetes = async (req, res, next) => {
    try {
      const response = await paqueteService.getAllPaquetes(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
  };
  exports.getPaqueteById = async (req, res, next) => {
    try {
      const response = await paqueteService.getPaqueteById(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
  };
  
  exports.updatePaqueteById = async (req, res, next) => {
    try {
      const response = await paqueteService.updatePaqueteById(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
  };
  
  exports.deletePaqueteById = async (req, res, next) => {
    try {
      const response = await paqueteService.deletePaqueteById(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
};