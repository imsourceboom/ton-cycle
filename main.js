const shell = require('shelljs');

const utimeUntil = Number(shell.exec('bash ~/ton-scripts/scripts/getconfig34.sh').stdout);
const oneCycle = 65536;
const electionsStartBefore = 32768;
const electionsEndBefore = 8192;
const electionCycle = 24576;
const currentUnixTimestamp = Math.floor(+new Date() / 1000);

// - Validator End time
// utime_until

// - Current Elections Start time
// utime_until - elections_start_before(32768) 

// - Current Elections End time
// utime_until - elections_end_before(8192) 

// - Election Open to End time [electionCycle]
// elections_start_before - elections_end_before

// - Next Elections Start time
// utime_until + one cycle(65536) - elections_start_before 

// UnixTimestamp To Time Convert function
const convertor = (timestamp) => {
	const date = new Date(timestamp * 1000);
	return dateFormat(date);
}

const dateFormat = (date) => {
	const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let dow = date.getDay();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;
	hour = hour >= 10 ? hour : '0' + hour;
	minute = minute >= 10 ? minute : '0' + minute;
	second = second >= 10 ? second : '0' + second;
	dow = dayOfTheWeek.map((i, j) => {
		if (j = dow) {
			return dayOfTheWeek[j];
		}
	});

	return `${date.getFullYear()}-${month}-${day} ${dow[0]} ${hour}:${minute}:${second}`;
};


//const LatestElectionStart = utimeUntil - electionsStartBefore;
//const LatestElectionEnd = utimeUntil - electionsEndBefore;
//const NextElectionStart = LatestElectionStart + oneCycle;
//const NextElectionEnd = NextElectionStart + electionCycle;
//const LatestValidateStart = utimeUntil - oneCycle;
//const LatestValidateEnd = utimeUntil;
//const NextValidateStart = LatestValidateEnd;
//const NextValidateEnd = LatestValidateStart + oneCycle;
//const NowtimeGapElecStart = currentUnixTimestamp - LatestElectionStart;

console.log(utimeUntil);
console.log(convertor(utimeUntil));
//console.log(typeof utimeUntil);
//console.log(LatestElectionStart);
//console.log(LatestElectionEnd);
console.log(currentUnixTimestamp);
console.log(convertor(currentUnixTimestamp));
