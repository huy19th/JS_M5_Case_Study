const checkAuthorization = (req, res, next) => {
    if (req.decoded.role !== 'admin') {
        res.status(401).json({message: 'Unathorized'})
    }
    else {
        next();
    }
}

export default checkAuthorization;