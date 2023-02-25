module.exports = function check(str, bracketsConfig) {
  const bracketsObj = bracketsConfig.reduce((acc, item) => {
    acc[item[1]] = item[0];
    return acc;
  }, {})
  
  const openBrackets = [];
  const theSame = [];

  bracketsConfig.forEach(x => {
    openBrackets.push(x[0]);
    if (x[1] === x[0]) {
    theSame.push(x[0])
  }
  })

  const stack = [];
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {

    let currentStr = strArr[i];
    let topElement = stack.at(-1);
    
    if (theSame.includes(currentStr)) {

      if (stack.length === 0) {
        stack.push(currentStr)   
      } 

      if (bracketsObj[currentStr] === topElement) {
        stack.pop()
      }

    } else {
      
      if (openBrackets.includes(currentStr)) {
        stack.push(currentStr)
      } else {

        if (stack.length === 0) {
          return false
        }
        
        if(bracketsObj[currentStr] === topElement) {
          stack.pop()
        } else {
          return false
        }

      }
    }
  }
  return stack.length === 0;
}