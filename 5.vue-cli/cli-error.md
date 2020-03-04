# vue cli问题汇总


## vue npm run build 上线样式错误解决方法
* 将样式集中存放，而且要放在类库状态等文件引入的上方;
* 这样打包出来的样式顺序,才会是我们想要的样式顺序

vue cli https://juejin.im/post/5bdec6e8e51d4505327a8952