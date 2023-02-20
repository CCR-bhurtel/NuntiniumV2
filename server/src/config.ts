const config = {
    development: {
        username: 'postgres',
        password: 'react.js12',
        database: 'nunitum',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: 'postgres',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'postgres',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};

export default config;
