var mongo = require('../db/mongodb-crud.js');

module.exports = function (app) {
    app.get('/trace', (req, res) => {
        console.log('请求参数', req.query);
        var where = {}, sort = [['trace_id',1], ['create_time', 1]], skip = 0;

        if (req.query.traceId) {
            where.trace_id = req.query.traceId;
        }
        if (req.query.requestMapping) {
            where.request_mapping = req.query.requestMapping;
            sort = [['create_time', -1]];
        }
        if (req.query.className) {
            where.class_name = req.query.className;
        }
        if (req.query.methodName) {
            var methodNameWhere = req.query.methodName
                                    .replace(/\./g, '\\.')
                                    .replace(/\$/g, '\\$')
                                    .replace(/\(/g, '\\(')
                                    .replace(/\)/g, '\\)');
            where.method_name = { $regex: methodNameWhere };
        }
        if (req.query.traceId) {
            where.trace_id = req.query.traceId;
        }
        if (req.query.traceId) {
            where.trace_id = req.query.traceId;
        }
        if (req.query.skip) {
            skip = parseInt(req.query.skip);
        }

        console.log("mongo查询条件", where);
        console.log("mongo查询排序", sort);
        console.log("mongo跳跃查询", skip);
        mongo.find(where, sort, skip, (results) => {
            res.render('index', { title: 'TraceLink', datas: results });
        });
        
    }),
    app.get('/json/trace', (req, res) => {
        console.log('请求参数', req.query);
        mongo.find({trace_id: "10177b625430c36c"}, (results) => {
            res.json(results);
        });
        
    })
};