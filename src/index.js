module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const strArr = str.split('');
  for (let i = 0; i < strArr.length;i++) {
    for (let j = 0; j < bracketsConfig.length;j++) {
      if(bracketsConfig[j][0] === bracketsConfig[j][1] && str.length % 2 ===0) {
        break;
      } else {
        if(strArr[i] === bracketsConfig[j][0]) {
          stack.push(strArr[i]);
        } else if (strArr[i] === bracketsConfig[j][1]) {
          if(!stack.pop()) {
            break
          } else {
            stack.pop();
          }
        } 
      }
    }
  }
  return stack.length === 0;
}
