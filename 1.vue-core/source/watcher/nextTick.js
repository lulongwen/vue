const queue = []

export default function nextTick(callback) {
  queue.push(callback)
  
  // 异步是分执行顺序的，先执行微任务，后执行宏任务
  // 微任务：promise, mutationObserver
  // 宏任务：setImmediate, setTimeout
  let timerFn = () => clearQueue()
  
  if (Promise) {
    return Promise.resolve().then(timerFn)
  }
  
  if (MutationObserver) {
    let observe = new MutationObserver(timerFn)
    let textNode = document.createTextNode('1')
    
    observe.observe(textNode, {characterData: true})
    textNode.textContent = '2'
    return
  }
  
  if (setImmediate) {
    return setImmediate(timerFn)
  }
  
  // 最后才用 setTimeout
  setTimeout(timerFn, 0)
}

function clearQueue() {
  queue.forEach(callback => {
    callback()
  })
}
