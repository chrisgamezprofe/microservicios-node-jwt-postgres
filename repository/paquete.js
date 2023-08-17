
class PaqueteRepository {
  constructor(paqueteModel) {
    this.paqueteModel = paqueteModel;
  }

  addPaquete(
    nombre_producto,
    codigo_seguimiento,
    compania_envio,
    direccion_envio,
    fecha,
    usuarioId
  ) {
    return this.paqueteModel.create({
      nombre_producto,
      codigo_seguimiento,
      compania_envio,
      direccion_envio,
      fecha,
      usuarioId
    });
  }

  getAllPaquetes() {
    return this.paqueteModel.findAll();
  }

  getPaqueteById(uuid) {
    return this.paqueteModel
      .findOne({
        where: {
          codigo_seguimiento: uuid,
        },
      })
      .then(function (paquete) {
        if (!paquete) {
          return "paquete not found";
        }
        return paquete.dataValues;
      });
  }

  async updatePaqueteById(
    nombre_producto,
    codigo_seguimiento,
    compania_envio,
    direccion_envio,
    fecha,
    estado
  ) {
    var updatedPaqueteObject = {};
    //const {count} = await
    return this.paqueteModel
      .update(
        {
          nombre_producto,
          codigo_seguimiento,
          compania_envio,
          direccion_envio,
          fecha,
          estado,
        },
        { returning: true, plain: true, where: { id: uuid } }
      )
      .then(function (result) {
        if (result != null && result.length > 0) {
          console.log("updated record " + result[1].dataValues);
          return result[1].dataValues;
        } else {
          return updatedPaqueteObject;
        }
      });
  }

  async deletePaqueteById(uuid) {
    const count = await this.paqueteModel.destroy({
      where: {
        id: uuid,
      },
    });
    console.log("deleted row(s):" + count);
    /*.then(function(count) {
          if (!count) {
              return 'book not found';
          }
          return count;
        });*/

    return count;
  }
}

module.exports = {
    PaqueteRepository,
};