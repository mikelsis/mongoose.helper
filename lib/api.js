var schemas = {};

exports.addSchema = function(name, Schema) {
    schemas[name] = Schema;
};

exports.create = function(Schema, data, callback) {
    if ('string' == typeof Schema) {
        new schemas[Schema](data).save(callback);
    } else {
        new Schema(data).save(callback);   
    }
};

exports.validateAndCreate = function(Schema, data, Validator, callback) {
    Validator(data, function(err, res){
       if (err) {
           callback(err, null);
       } else {
           new Schema(data).save(callback);
       }
    });
};

exports.list = function(Schema, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].find(callback);
    } else {
        Schema.find(callback);   
    }
};

exports.remove = function(Schema, filter, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].remove(filter, callback);
    } else {
        Schema.remove(filter, callback);
    }
}

exports.find = function(Schema, filter, callback) {
    if ('string' == typeof Schema) {
        console.log(schemas[Schema]);
        schemas[Schema].find(filter, callback);
    } else {
        Schema.find(filter, callback);   
    }
};

exports.findByID = function(Schema, id, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].findById(id, callback);
    } else {
        Schema.findById(id, callback);
    }
};

exports.findOne = function(Schema, filter, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].findOne(filter, callback);
    } else {
        Schema.findOne(filter, callback);   
    }
};

exports.paginate = function(Schema, pageSize, pageNumber, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].find().skip(pageSize * (pageNumber - 1)).limit(pageSize).exec(callback);
    } else {
        Schema.find().skip(pageSize * (pageNumber - 1)).limit(pageSize).exec(callback);   
    }
};

exports.count = function(Schema, filter, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].find(filter).count().exec(callback);
    } else {
        Schema.find(filter).count().exec(callback);   
    }
};

exports.exists = function(Schema, filter, callback) {
    if ('string' == typeof Schema) {
        schemas[Schema].findOne(filter, function(err, doc){
            if (err) {
                callback("error occured: "+err, null);
            } else {
                if (doc) {
                    callback(null, true);
                } else {
                    callback(null, false);
                }
            }
        });   
    } else {
        Schema.findOne(filter, function(err, doc){
            if (err) {
                callback("error occured: "+err, null);
            } else {
                if (doc) {
                    callback(null, true);
                } else {
                    callback(null, false);
                }
            }
        });   
    }
};