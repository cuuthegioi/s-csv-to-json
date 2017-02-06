var fs = require("fs");

fs.readFile('convertcsv.json', 'utf8', function (err, data) {
    if (err) throw err;

    var temp = JSON.parse(data);

    var obj = {};

    temp.forEach(function (data) {
        var key = data.FIELD1.split(':')[0];

        obj[key] = data.FIELD2;
    });
    
    fs.writeFileSync('./data.json', JSON.stringify(obj, null, 2) , 'utf-8');
});


