const updateDatabase = require('./database_conversione/connector-csv-mongo')
module.exports = () => {
    console.log("ciao a tutti")
    updateDatabase();

}
