// TODO :
//  1. Add Wait period in between after Random(N) items liked.
//  2. Add variables for element selectors.

const Random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const HumanizeNumber = (num=2500, amount=0.1)=> {
  const humanizer = Random(num * amount * -1, num * amount)
  return num + humanizer
}


const Wait = (ms=2500)=> {
  return new Promise((res)=> {
    setTimeout(()=> {
      return res()
    }, 2500)
  })
}

const GetLikeButton = () => {
  return document.querySelector('svg[aria-label="Like"]')?.parentNode
}

const GetNextButton = () => {
  return document.querySelector('svg[aria-label="Next"]')?.parentNode
}

const OpenFirstItem = () => {
  const firstItem = Array.from(document.querySelectorAll('._aagw'))[0]

  firstItem?.click()

  return firstItem != null
}

const DoLike = async (isInit=false) => {

  if (isInit) {
    const didOpen = OpenFirstItem()
    
    if (!didOpen) return
    
    await Wait(HumanizeNumber(Random(500, 1500)))
  }
  

  const button = GetLikeButton()

  if (button) {
    button.click()
    await Wait(HumanizeNumber(Random(100, 300)))
  } 

  const nextButton = GetNextButton()
  
  if (nextButton) {
    nextButton.click()

    await Wait(HumanizeNumber(Random(2250, 3000)))

    DoLike(false)
  }
}



DoLike(true)