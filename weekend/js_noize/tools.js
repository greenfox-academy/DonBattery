/* eslint linebreak-style: ['error', 'windows'] */

function isNumeric(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
}

function formatDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return `${year}.${month}.${day} ${hour}:${min}:${sec}`;
}

function serverLog(message) {
  console.log(`${formatDate()} - ${message}`);
}

function getIPaddress(inputString) {
  if (typeof inputString !== 'string') {
    return -1;
  }
  let temp = '';
  let i = 0;
  let foundStart = false;
  while (i < inputString.length) {
    if (this.isNumeric(inputString[i]) || foundStart) {
      foundStart = true;
      temp += inputString[i];
    }
    i += 1;
  }
  if (temp === '1' || temp === '127.0.0.1') {
    return 'localhost';
  }
  return temp;
}

module.exports = {
  isNumeric, formatDate, serverLog, getIPaddress,
};