/**
 * Created by hass on 1/31/2017.
 */
var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {
    hosts: [
        // 'https://[username]:[password]@[server]:[port]/',
        'http://localhost:9200/'
    ]
});

module.exports = client;