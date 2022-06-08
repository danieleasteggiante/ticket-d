const User = require("../../models/user-model");
const connection = require('../../connect/connection');
const fs = require('fs');


function CsvToJson(file) {
    console.log("start")

    var arrFile = [];

    var arrLine = file.split('\r\n')
    arrLine.forEach(element => {
        var elementArr = element.split(',')
        if (elementArr[0] !== '') {
            arrFile.push({
                CodCliente: elementArr[0],
                password: elementArr[1],
                RagioneSociale: elementArr[2] !== undefined ? elementArr[2].trim() : null,
                userType: elementArr[3],
                userArea: elementArr[4],
                username: elementArr[5] !== undefined ? elementArr[5].trim() : null,
                mail: elementArr[6]
            })
        }
    });
    console.log("File converted")
    return arrFile
}

var data = fs.readFileSync('./scheduled_tasks/database_conversione/AnagraficaClienti_Ticketing.csv', 'utf16le');



    console.log("search file");


    console.log("file founded");

    console.log("update db inside");

    connection.connection.dropCollection('users', function(err, result) {
        if (err) console.log(err)
    });

    var arrFile = CsvToJson(data);
    arrFile.forEach((element, i) => {
        if (element !== undefined && i !== 0) {

         const createUser = new User(
                element
            ).save().then(element=>{console.log(element)});
          
        }

    })
