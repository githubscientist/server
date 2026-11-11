const errorHandler = (req, res, next) => {
    // if the request reaches here, it means no matching route was found

    res.status(404).json({ 'message': 'Route not found...' });
}

module.exports = errorHandler;