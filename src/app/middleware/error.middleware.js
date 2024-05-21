import {BadRequestError, ConflictError, InternalServerError, NotFoundError, ValidationError} from '../../lib/utils/error-definitions.js' 

const ErrorMiddleware = (err, req, res, next) => {
    if(err instanceof ValidationError){
        res.status(err.statuscode).json({
            success: false,
            message: err.message,
            errors: err.errors
        })
    }else if(err instanceof NotFoundError || err instanceof ConflictError || err instanceof BadRequestError || err instanceof InternalServerError){
        res.status(err.statuscode).json({
            success: false,
            message: err.message
        })
    }else{
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export default ErrorMiddleware;