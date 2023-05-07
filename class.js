class ExampleOne {
  constructor(number, j) {
    this.numberValue = number;
  }

  set numberValue(value) {
    if (!Number.isInteger(value)) {
      return console.log(new Error('이 함수는 정수를 필요로 합니다.'))
    } else {
      this._numberValue = value;
    }
  }

  get() {
    return this.first(this.second(this.third(this.fourth(this._numberValue))))
  }

  first(x){
    return x+1
  }

  second(x){
    return x+2
  }

  third(x){
    return x+3
  }

  fourth(x){
    return x+4
  }

}



console.log(new ExampleOne(10).get())