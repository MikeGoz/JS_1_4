// task 1.4

function timeFormat(tm) {
  	var sec = Math.floor((tm%3600)%60);
	var min = Math.floor((tm%3600)/60);
  	var hrs = Math.floor(tm/3600);
	
	if (tm < 60) {
    return(sec + ' sec.');
  } else if (tm < 3600) {
      return(min + ' min. ' + sec + ' sec.');
 	} else {
    	return(hrs + ' hrs. ' + min + ' min. ' + sec + ' sec.');
  }
}
exports.print = timeFormat;