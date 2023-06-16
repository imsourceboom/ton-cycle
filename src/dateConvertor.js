// UnixTimestamp To Time Convert function
exports.dateConvertor = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return dateFormat(date);
};

const dateFormat = (date) => {
  const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
    if ((j = dow)) {
      return dayOfTheWeek[j];
    }
  });

  return `${date.getFullYear()}-${month}-${day} ${
    dow[0]
  } ${hour}:${minute}:${second}`;
};
