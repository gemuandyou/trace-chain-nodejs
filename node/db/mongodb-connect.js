var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.18.35:27017?maxPoolSize=3";

module.exports = {
    mongo: function(callback) {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err) throw err;
            console.log("连接数据库成功!");
            callback(client.db('calllink'));
            console.log("数据库连接关闭!");
            client.close();
        });
    }
};
