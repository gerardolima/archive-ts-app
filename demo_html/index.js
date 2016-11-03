var myAppInstance = require('gerardolima-ts-app');
var msg = "application instance name: " + myAppInstance.get_name() + "\n"
        + "double(1): " + myAppInstance.constructor.double(1); 

document.getElementById('date-placeholder').innerText = (new Date()).toString();
document.getElementById('output-placeholder').innerText = msg; 
