# Knapsack problem

It's a list of items for program to choose between to add to knapsack: 

```js
const items = [
    { id: 1, value:5, weight: 14 }, 
    { id: 2, value:8, weight: 3  }, 
    { id: 3, value: 10, weight: 8},
    { id: 4, value: 2, weight: 4},
    { id: 5, value: 22, weight: 17},
    {id: 6, value:12, weight: 1},
    { id: 7, value: 45, weight:54},
];
```

The function adds the items value and weight to earlier specified variables;
`result` and `weightSort`. 
```js
let weightSort = 0;
let result = 0;
``` 
```js
result += items[i].value;
weightSort += items[i].weight;
```

Function also appends items id to `idList` array if everything is alright with help of the if statement:
```js
if(maxWeight < weightSort){
    weightSort -= items[d].weight;
    result -= items[d].value;
    continue;
} else{
    idList.push(items[i].id);
}
```
If statement also takes care of deleting the value and weight from `result` and `weightSort` so if the `weightSort` variable has bigger value than `maxWeight` those values are rejected.

