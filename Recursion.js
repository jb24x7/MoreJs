


const ReturnChange = (cash, coinCount) => {

  const ChangeCount = {
    Quarters : 0,
    Dimes : 0,
    Nickels : 0,
    Penies : 0
  }

  coins = coinCount || ChangeCount
  value = (coins.Quarters * .25) + (coins.Dimes * .10) + (coins.Nickels * .05) + (coins.Penies * .01)

  if(value < cash) {

    if((value + .25) <= cash) {
      coins.Quarters = CalcNumberCoin("Quarters", cash, value)
    } else if((value + .10) <= cash) {
      coins.Dimes = CalcNumberCoin("Dimes", cash, value)
    } else if((value + .05) <= cash) {
      coins.Nickels = CalcNumberCoin("Nickels", cash, value)
    } else if((value + .01) <= cash) {
      coins.Penies = CalcNumberCoin("Penies", cash, value)
    }
    return ReturnChange(cash, coins)
  }

  return `You will get ${coins.Quarters} quarters, ${coins.Dimes} dimes, ${coins.Nickels} nickels, and ${coins.Penies} penies back`
  

}

const CalcNumberCoin = (coinType, cash, value) => {
  cash = cash - value
  if(coinType == "Quarters"){
    return ((cash - (cash % .25)) / .25)
  } else if(coinType == "Dimes"){
    return ((cash - (cash % .10)) / .10)
  } else if(coinType == "Nickels"){
    return ((cash - (cash % .05)) / .05)
  }else {
    return ((cash - (cash % .01)) / .01)
  }
}

