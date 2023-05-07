const promisetest = (numberValue) => new Promise((resolve, reject) => {
  if (Number.isInteger(numberValue) === true) {
    resolve(numberValue)
  } else {
    reject(new Error('이 함수는 정수가 필요합니다.'))
  }
}).then((data) => {
  // console.log(data)
  return data + 1
}).then((data) => {
  // console.log(data)
  return data + 2
}).then((data) => {
  // console.log(data)
  return data + 3
}).then((data) => {
  // console.log(data)
  return data + 4
  // return console.log(data+4)
}).catch((error) => {
  console.error(error)
})

// promisetest(10)
// 처음엔 이렇게 작성했는데, 이런 경우에는 도출된 결과값으로 다른 활용이 불가하다보니 재사용성이 낮다. 재사용성을 고려하여 아래와 같이 함수 호출 시에 then 을 활용하여 호출하는 것이 재사용성까지 고려한 결과라고 생각한다.

promisetest(10).then((data) => {
  return console.log(data)
}).catch((error) => {
  return console.error(error)
})