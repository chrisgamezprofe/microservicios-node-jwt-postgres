const customResponse = {};

customResponse.success = { statusCode: 200, message: 'Request has been processed successfully.' };
customResponse.reqCreated = { statusCode: 201, message: 'Record has been created successfully.' };
customResponse.recordNotFound = { statusCode: 404, message: 'No record found.' };
customResponse.serverError = { statusCode: 500, message: 'Internal server error.' };
customResponse.reqValidationError = { statusCode: 422, message: 'Data validation failed.' };

module.exports = customResponse;