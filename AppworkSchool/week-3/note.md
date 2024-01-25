##

### 重點

1. Array Iteration 迭代

### 筆記

### Array Iteration

##### forEach

```javascript
// 優點：
// 1. 易懂好閱讀，有內建的參數
// 2. 不會出現無限迴圈

// 缺點：
// 1. 無法終止迭代

Array.forEach((element, index) => {
    // element = 當前迭代的元素
    // index = 該元素的index值

    console.log(element, index);
});
```

##### filter

```javascript
// 優點：
// 1. 不會修改原陣列，以將過濾資結果放在新陣列中回傳

// if condition statement is true, push that element to new array
const result = Array.filter((element) => condition statement);
```

##### map

```javascript
// 優點：
// 1. 和filter有點像，不過map會將原本的陣列直接修改

const arr = [0, 1, 2, 3];

const newArr = arr.map((element) => element++);

console.log(newArr); // [1, 2, 3, 4]
```

##### reduce

```javascript
// 優點：
// 1. 回傳單一數值，記得要將每次處理的element return，下次處理才不會是undefined

const arr = [0, 1, 2, 3];

const newArr = arr.reduce((returnElement, element) => {
    returnElement += element;
    return returnElement;
}, 0);

console.log(newArr); // 6
```

---

### 小技巧

1. chaning function

```js
// 將function以鏈條的方式接續著執行

// ex: 先進行filter在進行reduce
groceryTotal = purchaseItems
    .filter((item) => item.dept === "groceries")
    .reduce((sum, item) => (sum += item.price), 0);

console.log(groceryTotal);
```

1. flattening

````js
// 將多維度的陣列扁平化，以一個大的陣列回傳
        const customers = [
            {
                name: "Tyrone",
                personal: {
                    age: 33,
                    hobbies: ["Bicycling", "Camping"],
                },
            },
            {
                name: "Elizabeth",
                personal: {
                    age: 25,
                    hobbies: ["Guitar", "Reading", "Gardening"],
                },
            },
            {
                name: "Penny",
                personal: {
                    age: 36,
                    hobbies: ["Comics", "Chess", "Legos"],
                },
            },
        ];
        let hobbies;

        // hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
        // Write your code below

        hobbies = customers
            .map((customer) => customer.personal.hobbies)
            .reduce((arr, hobbies) => [...arr, ...hobbies], []);

        console.log(hobbies);```
````
