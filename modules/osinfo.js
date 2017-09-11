// task 1.4

var os = require('os');
var timeFormat = require('./timeformat');

function getOSinfo() {
  var type = os.type();
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var userInfo = os.userInfo();
  var uptime = os.uptime();      // method returns the system uptime in number of seconds.

  if (type === 'Darwin') {
    type = 'OSX';
  } else if(type === 'Windows_NT') {
    type = 'Windows';
  }
  console.log('Uptime: ', timeFormat.print(uptime));
  console.log('System: ', type);
  console.log('Release: ', release);
  console.log('CPU model: ', cpu);
  console.log('User name: ', userInfo.username);
  console.log('Home dir: ', userInfo.homedir);
}
exports.print = getOSinfo;
