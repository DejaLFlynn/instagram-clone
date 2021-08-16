const tracer = require('dd-trace').init({
    logInjection: true,
    analytics: true,
    runtimeMetrics: true,
    tags:{
        env: process.env.NODE_ENV,
        owner: 'imstagram',

    },
});
module.exports = tracer;