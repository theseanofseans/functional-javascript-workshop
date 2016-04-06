
var logger= require("./Partial_Application_without_Bind.js");

    var info = logger('INFO:')
    info('this is an info message')

    var warn = logger('WARN:')
    warn('this is a warning message', 'with more info')
