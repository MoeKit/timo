# Demo

---

## Normal usage

````javascript
seajs.use('index', function(timo) {
    console.log(timo);
    console.log(timo.friendlyTime(new Date('2014/05/25 9:00').getTime()));
    var a = timo.format.date(new Date(),'yyyy年MM月dd日');
    console.log(a);
});
````
