
const errorMiddleware = (err, req, res, next) => {
    try{
        
        let error = {...err };
        error.message = err.message;
    
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }catch(error){
        next();
    }
}

export default errorMiddleware;