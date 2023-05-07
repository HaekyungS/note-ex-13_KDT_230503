function exampleOne(data){
  if(Number.isInteger(data)===true){
    (data)=>{
      data+=1;
      (data)=>{
        data+=2;
        (data)=>{
          data+=3;
          (data)=>{
            data+=4;
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