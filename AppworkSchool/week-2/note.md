##

### 重點

1. Array

### 筆記

### Array

##### 新增修改

```javascript
Array.push(ele); // 新增元素到陣列最後面
Array.unshift(ele); // 新增元素到陣列最前面

Array.shift(); //刪除第一個元素，不接受參數，並同時return被刪除的元素
Array.pop(); //刪除最後一個元素，不接受參數，並同時return被刪除的元素
```

##### 展開

```javascript
(...Array) // 將陣列展開

// 注意這個情境
let Arr1 = [0, 1, 2, 3];
let Arr2 = [4, 5, 6, 7];
let Arr3 = [...Arr1, ...Arr2];
Arr1.pop()

console.log(Arr3.length) // 這邊輸出還會是8,因為上面的pop不影響合併後的Arr3


```

##### 查找

```javascript
Array.includes(ele); // return wether the element is in the Array or not
Array.indexOf(ele); // return the index of the element in the Array
Array.join(", "); // return a String combined all the element in the Array and linked with ", "
```
