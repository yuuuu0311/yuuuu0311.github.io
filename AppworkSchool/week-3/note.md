##

### 重點

1. Array
2. Object
3. DOM

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

### Object

##### 迴圈

```javascript
for (const key in object) {
    console.log(object[key]);
}
```

### DOM (Document Object Modal)

以樹狀結構表述整個網頁的元素

1. eventListener('event', callback function)

    ```javascript
    document.body.eventListener("event", () => {
        // do something
    });

    document.body.eventListener("event", function () {
        // do something
    });

    document.body.eventListener("event", callback);
    ```

2. 創建一個 html DOM

    ```javascript
    document.createElement("HTMLElement");
    ```

3. 插入到 DOM Tree 中，有分往前及往後插入

    ```javascript
    .append(HTMLElement);
    .prepend(HTMLElement);
    ```

4. Bubbling 冒泡事件
5. Event delegation

### 小技巧

1. 物件也可展開，兩物件展開後合併可參考上方陣列的做法

```javascript
(...Object) // 將陣列展開
```

2.  Object.keys(); 和 Object.values(); 來快速得到物件的 key 和 value

```javascript
Object.keys(); //  returns an array containing the keys
Object.values(); //  returns an array of a given object's property values

const personProps = Object.keys(person);
console.log(personProps); // > (4) ["name", "role", "skills", "isTeacher"]

// 看物件長度
console.log(Object.keys(person).length); // 4
```

3. switch

```javascript
判斷傳入的參數適合符合 case 然後執行相對應的動作，可更簡潔地完成多種條件判斷

    // Assignment-2
    switch (value[2]) {
        case "+":
            return value[0] + value[1];
        case "-":
            return value[0] - value[1];
        case "*":
            return value[0] * value[1];
        case "/":
            return value[0] / value[1];
        default:
            return `Not supported`;
    }

```
