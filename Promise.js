const promisetest = (numberValue)=> new Promise((resolve, reject)=>{
  if(Number.isInteger(numberValue)===true){
    resolve(numberValue)
  }else{
    throw new Error('이 함수는 정수가 필요합니다.')
  }
}).then((data)=>{
  // console.log(data)
  return data+1
}).then((data)=>{
  // console.log(data)
  return data+2
})


promisetest(22)
// promisetest("rk")