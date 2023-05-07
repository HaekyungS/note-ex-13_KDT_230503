async function exampleOne(numberValue) {
  let result = numberValue;

  await new Promise((resolve, reject) => {
    if (Number.isInteger(numberValue) === true) {
      resolve(numberValue)
    } else {
      reject(new Error('이 함수는 정수를 필요로 합니다.'))
    }
  })

  await new Promise((resolve, reject) => {
    result += 1
    return resolve(result)
  })
  // console.log(result)

  await new Promise((resolve, reject) => {
    result += 2
    return resolve(result)
  })
  // console.log(result)

  await new Promise((resolve, reject) => {
    result += 3
    return resolve(result)
  })
  // console.log(result)

  await new Promise((resolve, reject) => {
    result += 4
    return resolve(result)
  })

  return result
}

exampleOne(10).then((result)=>{
  console.log(result)
})