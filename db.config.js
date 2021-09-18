module.exports = {
    HOST: "locahost",
    USER: "root",
    PASSWORD: " 12345",
    DB: "translation",
    dialect: "mysql",
    pool: {
        max: 25,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};