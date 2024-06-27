// const items : Items [] = [
//   {name : "콜라", stock : 5},
//   {name : "사이다", stock : 0},
//   {name : "물", stock : 10},
//   {name : "주스", stock : 0}
// ];
// const availableItems = items.filter((item)=> {
//   return item.stock>0;})
//! 1번
//console.log(availableItems);
// const items : Items [] = [
//    {name : "콜라", price :1000 },
//    {name : "사이다", price : 1200},
//    {name : "물", price : 800},
//    {name : "주스", price : 1500}
// ];
// const itemList = items.map((item)=>{
//   return `${item.name} : ${item.price}원`;
// })
// ! 2번
//console.log(itemList);
//  const items : Items [] = [
//    {name : "콜라", stock : 5},
//    {name : "사이다", stock : 0},
//    {name : "물", stock : 10},
//    {name : "주스", stock : 2}
//  ];
//  const sortedItems = items.sort((a,b)=>{
//   return b.stock - a.stock;
//  })
// var items = [
//     { name: "콜라", stock: 5 },
//     { name: "사이다", stock: 0 },
//     { name: "물", stock: 10 },
//     { name: "주스", stock: 2 }
// ];
// var soda = items.find(function (item) {
//     return item.name === "사이다";
// });
// const items = [
//     {name : "콜라", stock : 5},
//     {name : "사이다", stock : 0},
//     {name : "물", stock : 10},
//     {name : "주스", stock : 2}
//   ];
  
//   const soda= items.find((item)=>{
//     return item.name === "사이다";
//   });
// ! 4번
//   console.log(soda);

// const totalStock = items.reduce((total, item)=> {
//     return total+item.stock;
// },0);
//! 5번
// console.log(totalStock);

// const itemNames = items.map((item)=> {
//     return item.name;
// })
// ! 6번
// console.log(itemNames);
// const items = [
//     {name : "콜라", price : 1000},
//     {name : "사이다", price : 1200},
//     {name : "물", price : 800},
//     {name : "주스", price : 1500}
//   ];

//   const expensiveItems = items.filter((item)=> {
//     return item.price >= 1000;
//   })
//! 7번
//   console.log(expensiveItems);
//    const items = [
//      {name : "콜라", stock : 5},
//      {name : "사이다", stock : 0},
//      {name : "물", stock : 10},
//      {name : "주스", stock : 2}
//    ];
// ! 8번
//    const hasStock = items.some((item)=>{
//     return item.stock > 0;
//    })
   
//    console.log(hasStock);
// const allInStock = items.every((item)=> {
//     return item.stock > 0;
// })
// ! 9번
// console.log(allInStock);
 const items = [
     {name : "콜라", price : 1000},
     {name : "사이다", price : 1200},
     {name : "물", price : 800},
     {name : "주스", price : 1500}
   ];
    const itemObject = items.reduce((obj, item)=> {
        obj[item.name] = item.price;
        return obj;
    }, {});
// ! 10 번
    console.log(itemObject);