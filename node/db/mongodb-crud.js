var {mongo} = require('./mongodb-connect');
const collectionName = 'tracelink';

module.exports = {
    find: function(where, sort, skip, callback) {
        mongo(function(db) {
            db.collection(collectionName).find(where).sort(sort).skip(skip).limit(101).toArray(function (err, result) {
                if (err) throw err;
                callback(result);
            });
        });
    }
}