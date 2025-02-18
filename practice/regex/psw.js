/**
 *  8 digit
 *  only contains number , a-z,A-Z, @#$_.
 */

const r = new RegExp(/^(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[@#$_.]+)[\da-zA-Z@#$_.]{8}$/, 'g')
console.log('123aa@#_'.match(r))