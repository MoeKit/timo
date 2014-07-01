# Timo

---

[![spm version](http://moekit.com/badge/timo)](http://moekit.com/package/timo)
[![Build Status](https://img.shields.io/travis/MoeKit/timo.svg)](https://travis-ci.org/MoeKit/timo)
[![Coverage Status](https://img.shields.io/coveralls/MoeKit/timo.svg)](https://coveralls.io/r/MoeKit/timo)

轻量的时间helper

如果只是要实现相对时间计算，而不想要引用庞大的 `moment`的话，使用函数 `timo.friendlyTime`

---


## 使用

### friendlyTime
相对时间计算

```js
define(function(require){
    var friendlyTime = require('index').friendlyTime;
    console.log(friendlyTime(new Date)): // 刚刚
});
```

### 时间格式化
骚等，未发布
