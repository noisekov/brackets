module.exports = function check(str, bracketsConfig) {
    const bracketsObj = bracketsConfig.reduce((acc, item) => {
    acc[item[1]] = item[0];
    return acc;
  }, {})
  
  const openbrackets = [];
  bracketsConfig.forEach(x => {
    openbrackets.push(x[0])
  })
 
  const stack = [];
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
        let currentStr = strArr[i];
        let topElement = stack.at(-1);
    
    console.log()
    if (openbrackets.includes(currentStr) && topElement !== currentStr) {
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
  return stack.length === 0;
}