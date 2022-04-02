const cassandra = require('cassandra-driver');
// const assert = require('assert');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'Spd' });

const query = 'SELECT key,value FROM rel';
client.execute(query, [], function(err, result) {
    // assert.ifError(err);
    console.log(result);
});
// var ExpressCassandra = require('express-cassandra');
// var models = ExpressCassandra.createClient({
//     clientOptions: {
//         contactPoints: ['127.0.0.1'],
//         protocolOptions: { port: 9042 },
//         keyspace: 'Spd',
//         queryOptions: {consistency: ExpressCassandra.consistencies.one},
//         authProvider: new models.driver.auth.PlainTextAuthProvider('nikosd', 'vF1=f7uiHccpim')
//     },
//     ormOptions: {
//         defaultReplicationStrategy : {
//             class: 'SimpleStrategy',
//             replication_factor: 1
//         },
//         migration: 'safe',
//     }
// });

// var MyModel = models.loadSchema('rel', {
//     fields:{
//         key    : "text",
//         value : "int"
//         // age     : "int",
//         // created : "timestamp"
//     },
//     key:["key"]
// });

// models.instance.rel.find({}, function(err, res){
//     if(err) throw err;
//     //people is an array of model instances containing the persons with name `John`
//     console.log(res);
// });
//
// //If you specifically expect only a single object after find, you may do this
// models.instance.rel.findOne({}, function(err, res){
//     if(err) throw err;
//     //The variable `john` is a model instance containing the person named `John`
//     //`john` will be undefined if no person named `John` was found
//     console.log(res);
// });

// // MyModel or models.instance.Person can now be used as the model instance
// console.log(models.instance.Person === MyModel);
//
// // sync the schema definition with the cassandra database table
// // if the schema has not changed, the callback will fire immediately
// // otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
// MyModel.syncDB(function(err, result) {
//     if (err) throw err;
//     console.log(result)
//     // result == true if any database schema was updated
//     // result == false if no schema change was detected in your models
// });