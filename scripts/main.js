const shell = require('shelljs');
const { dateConvertor } = require('./dateConvertor');

const oneCycle = 65536;
const utimeUntil = Number(
  shell.exec('bash ~/ton-scripts/scripts/getconfig34.sh').stdout
);
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

const LatestElectionStart = utimeUntil - electionsStartBefore;
const LatestElectionEnd = utimeUntil - electionsEndBefore;
const NextElectionStart = LatestElectionStart + oneCycle;
const NextElectionEnd = NextElectionStart + electionCycle;
const LatestValidateStart = utimeUntil - oneCycle;
const LatestValidateEnd = utimeUntil;
const NextValidateStart = LatestValidateEnd;
const NextValidateEnd = LatestValidateStart + oneCycle;
const NowtimeGapElecStart = currentUnixTimestamp - LatestElectionStart;

console.log(dateConvertor(utimeUntil));
console.log(dateConvertor(LatestElectionStart));
console.log(dateConvertor(LatestElectionEnd));
console.log(dateConvertor(NextElectionStart));
console.log(dateConvertor(NextElectionEnd));
console.log(dateConvertor(LatestValidateStart));
console.log(dateConvertor(LatestValidateEnd));
console.log(dateConvertor(NextValidateStart));
console.log(dateConvertor(NextValidateEnd));
console.log(dateConvertor(currentUnixTimestamp));
console.log(dateConvertor(NowtimeGapElecStart));
