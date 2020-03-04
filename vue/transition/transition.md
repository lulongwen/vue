# transition
* ` transition ` 单个元素动画
* ` transition-group ` 多个元素动画
  * 多个元素需要使用transition-group
* 只有 DOM从显示到隐藏，或隐藏到显示，才能用 vue动画


Vue 页面切换效果
    https://www.thinksaas.cn/group/topic/839433
    https://codepen.io/HelKyle/pen/BrGpop 

## enter-to & leave-to
    ```
    // fade指的是 transition的 name值
    fade-enter 是 0
    fade-enter-active 是过渡的状态，即 transition
    fade-enter-to 是 1 ，所以等于 1的时候应该是 结束，
    要把 fade-enter-to 单独拿出来，代码如下


    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s ease-in;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-to, .fade-leave{
        opacity: 1
    }

    ```


## key
    ```
    过渡：2个标签名相同，没有过渡效果，要用 key 标识出来
    mode:
        mode="in-out" 默认，动画会有重叠，改为 mode="out-in"
        mode 控制多元素动画过渡
    <transition name="fade" mode="out-in">
        <p v-if="show" key="1">I am show </p>
        <p v-else key="2">Not show </p>
    </transition>
    ```


## transition 动画的钩子函数
- JS 过渡动画效果要比 CSS更丰富
    ```
    // JS动画不需要 name属性，但要加上 :css="false"，不受 CSS动画影响
    <transition :css="false"
    @before-enter="beforeEnter"
    @enter="eneter"
    @leave="leave">
        <p v-show="show"> SHOW </p>
    </transition>

    methods:{
        beforeEnter(el){
            $(el).css({
                left: '-500px',
                opacity: 0
            });
        },
        enter(el, done){
            $(el).animate({
                left: 0,
                opacity: 1
            }, {
                duration: 900,
                complete: done // 必须调用 done方法，否则有 BUG
            });
        },
        leave(el, done){
            $(el).animate({
                left: '500px',
                opacity: 0
            }, {
                duration: 900,
                complete: done // 必须调用 done方法，否则有 BUG
            });
        }
    }
    ```
