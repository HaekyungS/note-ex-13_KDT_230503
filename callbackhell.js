function exampleOne(data){
  if(Number.isInteger(data)===true){
    return (data)=>{
      data+=1
      return (data)=>{
        data+=2
        return (data)=>{
          data+=3
          return (data)=>{
            data+=4
            return data
          }
        }
      }
    }
  }else{
    return new Error('이 함수는 정수가 필요합니다.')
  }
}

console.log(exampleOne(10))