// task 1.4

var OSinfo = require('./modules/osinfo');

process.stdin.setEncoding('utf-8');                    
process.stdin.on('readable', function() {
    var input = process.stdin.read();                  
    if(input !== null) {                               
        var instruction = input.toString().trim();
        var version = process.versions.node;            
         
    	switch (instruction) {
        	case '/exit':	
            	process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
        	case '/node':
				process.stdout.write('Node version: '+ version +'\n');
            	break;
        	case '/system':
    			OSinfo.print();
    			break;
        	default: 
            	process.stderr.write('Wrong instruction!\n');
        }                 
    }
});