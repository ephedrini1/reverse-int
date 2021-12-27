module.exports = function reverse (n) {
  if (n < 0) n = -n;
  let result = '';
   while (n) {
       result += n % 10;
       n = Math.floor(n / 10);
   }
   return result;
}
