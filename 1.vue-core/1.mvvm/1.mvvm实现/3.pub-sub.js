// 发布订阅模式：先订阅，后发布 [fn1, fn2, fn3]
function Dep () {
  this.subs = []
}

// 订阅
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

// 绑定的方法，都有一个 update 属性
Dep.prototype.notify = function () {
  this.subs.forEach(sub => sub.update())
}


// Watcher 是个类，通过这个类创建的实例都有一个 update方法
function Watcher (fn) {
  this.fn = fn
}

Watcher.prototype.update = function () {
  this.fn()
}


let watch = new Watcher(function() { // fn
  console.log(1)
})

let dep = new Dep()
// 将 watch 放到数组中 [watch.update, watch.update]
dep.addSub(watch)
dep.addSub(watch)
console.log(dep.subs)
