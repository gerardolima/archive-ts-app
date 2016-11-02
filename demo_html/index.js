var numFormmater = require('gerardolima-ts-app');
var formattedNum = numFormmater(234324234);

document.getElementById('date-placeholder').innerText = (new Date()).toString();
document.getElementById('output-placeholder').innerText = formattedNum; 

