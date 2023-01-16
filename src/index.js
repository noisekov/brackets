module.exports = function check(str, bracketsConfig) {
    // your solution
    const stack = [];
    let count = 0;
    const strArr = str.split('');
    
    for (let i = 0; i < strArr.length;i++) {
      for (let j = 0; j < bracketsConfig.length;j++) {
          if(strArr[i] === bracketsConfig[j][0]) {
            stack.push(strArr[i]);
            count++;
          } else if (strArr[i] === bracketsConfig[j][1]) {
            if(!stack.pop()) {
              break;
              return false;
            }
            count--;
          } else {
            count--;
          }
      }
    }
    return stack.length === 0
}
