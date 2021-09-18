const sequelize = require('sequelize');

const sequelize = require('../connection');

const Translate = sequelize.define('translation', {
    translationId: {
        type: Sequelize.INTEGER,
        primarykey: true,
        allowNull: false,
        autoIncrement: true
    },
    toLang: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fromLang: {
        type: sequelize.STRING,
        allowNull: false
    },
    textContent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    translatedText: {
        type: Sequelize.DATEONLY,
        deaultValue: new Date()
    },
    createdAt: {
        type: sequelize.DATEONLY,
        allowNull: false,
        default: new Date()
    },
    updatedAt: {
        type: sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    }
    
});

module.exports = Translate;