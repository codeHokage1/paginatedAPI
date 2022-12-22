const paginate = (userSchema) => {
    return async (req, res, next) => {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
    
        const startItem = (page - 1) * limit;
        const endItem = page * limit;
    
        // const itemsToSend = obj.slice(startItem, endItem);
        const obj = await userSchema.find();
        const itemsToSend = await userSchema.find().limit(limit).skip(startItem).exec();
        const results = {};
    
        if (startItem > 0) {
            results.previousPage = {
                page:page - 1,
                limit: limit,
            }
        }
    
        if (endItem < await userSchema.countDocuments().exec()) {
            results.nextPage = {
                page:page + 1,
                limit: limit,
            }
        }
        results.results = itemsToSend;
        req.paginatedResult = results;
        next();
    }
}

module.exports = paginate;