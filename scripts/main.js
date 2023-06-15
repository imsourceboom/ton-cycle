const { dateConvertor } = require('./dateConvertor');

(async () => {
	const response = await fetch("http://141.164.37.205:5000/api/getconfig34");
	const jsonData = await response.json();
	const utimeUntil = jsonData.getconfig34;
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

const latestElectionStart = utimeUntil - electionsStartBefore;
const latestElectionEnd = utimeUntil - electionsEndBefore;
const nextElectionStart = latestElectionStart + oneCycle;
const nextElectionEnd = nextElectionStart + electionCycle;
const latestValidateStart = utimeUntil - oneCycle;
const latestValidateEnd = utimeUntil;
const nextValidateStart = latestValidateEnd;
const nextValidateEnd = latestValidateStart + oneCycle;
const nowtimeGapElecStart = currentUnixTimestamp - latestElectionStart;

console.log(dateConvertor(utimeUntil));
console.log(dateConvertor(latestElectionStart));
console.log(dateConvertor(latestElectionEnd));
console.log(dateConvertor(nextElectionStart));
console.log(dateConvertor(nextElectionEnd));
console.log(dateConvertor(latestValidateStart));
console.log(dateConvertor(latestValidateEnd));
console.log(dateConvertor(nextValidateStart));
console.log(dateConvertor(nextValidateEnd));
console.log(dateConvertor(currentUnixTimestamp));
console.log(dateConvertor(nowtimeGapElecStart));

//const currentElecStartH1 = document.querySelector(
//  'article#current-election div.start h1'
//);
//const currentElecEndH1 = document.querySelector(
//  'article#current-election div.end h1'
//);
//const nextElecStartH1 = document.querySelector(
//  'article#next-election div.start h1'
//);
//const nextElecEndH1 = document.querySelector(
//  'article#next-election div.end h1'
//);
//
//currentElecStartH1.textContent = latestElectionStart;
//currentElecEndH1.textContent = latestElectionEnd;
//nextElecStartH1.textContent = nextElectionStart;
//nextElecEndH1.textContent = nextElectionEnd;
})();
