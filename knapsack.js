const items = [
    { id: 1, value:5, weight: 14 }, 
    { id: 2, value:8, weight: 3  }, 
    { id: 3, value: 10, weight: 8},
    { id: 4, value: 2, weight: 4},
    { id: 5, value: 22, weight: 17},
    { id: 6, value:12, weight: 1},
    { id: 7, value: 45, weight:54},
];

maxWeight = 100;


function sort(){
    let weightSort = 0;
    let result = 0;
    let idList = [];
    items.sort((a, b) => b.value - a.value);
    for(let i = 0; i < items.length; i++){
        let d = i - 1;
        result += items[i].value;
        weightSort += items[i].weight;
        console.log('maxWeight < weightSort :', maxWeight < weightSort, ' /i:', i, ' /items[i].id:', items[i].id)
        if(maxWeight < weightSort){
            weightSort -= items[i].weight;
            result -= items[i].value;
            continue;
        } else{
        idList.push(items[i].id);
        }
    }
    console.log(items)
    console.log(result);
    console.log(weightSort);
    console.log(idList);
}
sort()