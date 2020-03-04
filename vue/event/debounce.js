/**
debounce(func, 400, true)

	函数节流 & 防抖
	https://github.com/mqyqingfeng/Blog/issues/22#issuecomment-357874221

*/

function debounce(func, wait, immediate) {
  let time

  let debounced = function() {
    let context = this
    if(time) clearTimeout(time)

    if(immediate) {
      let callNow = !time
      if(callNow) func.apply(context, arguments)
      
      //见注解
      time = setTimeout(() => {time = null}, wait)
    }
    else {
      time = setTimeout(() => {func.apply(context, arguments)}, wait)
    }
  }

  debounced.cancel = function() {
    clearTimeout(time)
    time = null
  }
  return debounced
}