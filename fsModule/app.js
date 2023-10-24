const fs = require('fs');
fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000} \n',function (err) {
    if (err) throw err;
});
fs.readFile("employees.json","utf8",function (err,data) {
    if (err) throw err;
    console.log(data);
});
fs.appendFile("employees.json",',{"name": "Employee 2 Name", "salary": 3000}\n',function (err) {
    if (err) throw err;
});
fs.unlink("employees.json",function (err) {
    if (err) throw err;
});

