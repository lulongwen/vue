import nextTick from './nextTick'

let queue = []
let has = {}

// 对重复的 watch进行过滤
export function queueWatcher (watcher) {
  let id = watcher.id
  if (has[id]) return
  
  has[id] = true
  queue.push(watcher) // 相同的 watcher 只会存到一个 queue中
  console.log('queue', id, queue)
  
  // 延迟清空队列，异步方法会等所有同步方法都执行完后在调用此方法
  // setTimeout(clearQueue, 0)
  nextTick(clearQueue)
}

// 等当前这一轮全部更新后，再去让 watcher 依次执行
function clearQueue() {
  queue.forEach(watcher => {
    watcher.run()
  })
  
  // 恢复正常，下一轮更新时继续使用
  has = {}
  queue = []
}

