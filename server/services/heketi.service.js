
axios = require('axios');
jwtSimple = require('jwt-simple');
sha256 = require('js-sha256');
moment = require('moment');

_this = this

const heketiUrl = 'http://heketi-storage-glusterfs.apps.osocloud.chidix.fr';

var heketiServer = axios.create({
    baseURL: heketiUrl
  });

// Add a request interceptor
heketiServer.interceptors.request.use(function (config) {
    // Add Authentication info
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = 'Bearer '+ generateJwtToken(config);
    config.params = undefined;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

var generateJwtToken = function(httpConfig){
    var user = httpConfig.params.user;
    var secret = httpConfig.params.secret;
    var hash = sha256.create();
    hash.update(httpConfig.method.toUpperCase()+'&'+httpConfig.url);
    var now = moment();

    var qsh = hash.hex();
    var payload = {
        iss: user,
        iat: now.format(),
        exp: now.add(7, 'days').format(),
        qsh: qsh
      }
    return jwtSimple.encode(payload, secret);
}

exports.getAllCluster = async function(req){
    return heketiServer.get('/clusters',{params:{user:req.session.username,secret:req.session.secret }})
        .then(function(response) {
            return response.data;
        }).catch(function (error) {
            return Promise.reject(error);
          })
    
}

