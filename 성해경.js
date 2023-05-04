function exampleOne(numberValue){
  function integerCheck(data){
    if(Number.isInteger(data)===true){
      return data;
    }else{
      return new Error('이 함수는 정수가 필요합니다.')
    }
  }

  function innerOne(one){
    return one+1;
  }

  function innerTwo(two){
    return two+2;
  }

  function innerThree(three){
    return three+3;
  }

  function innerFour(four){
    return four+4;
  }

  integerCheck(numberValue);
  const first = innerOne(numberValue)
  const second = innerTwo(first)
  const third = innerThree(second)
  const fourth = innerFour(third)
  return fourth
}

const result = exampleOne(10);
console.log(result)