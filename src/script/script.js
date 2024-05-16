const first = (vol) => {
    let kök = Math.sqrt(vol)
    console.log(kök);
}

first(16)


const whichLetter = (str) => {
    let sait = ''
    let samit = ''
    let lower = str.toLowerCase()
    
    for (let i of lower) {
      switch (i) {
        case 'a' :
        case 'e' :
        case 'ə' :
        case 'i' :
        case 'ı' :
        case 'o' :
        case 'ö' :
        case 'u' :
        case 'ü' :
          sait += i
          break;
        case ' ' :
          continue;
        default :
        samit += i
      }
    }
  
    console.log(`saitlər - ${sait}`);
    console.log(`saitlərin sayı - ${sait.length}`);
    console.log(`samitlər - ${samit}`);
    console.log(`samitlərin sayı - ${samit.length}`);
  }
  whichLetter('hORiZon loREm')


const combine = (arr) => {
  let result = ''

  for (let i of arr) {
    let str = i.toString()
    result += str
  }
  console.log(`cavab - ${result}`);
}
combine([8, 'name', 30, 'lorem'])