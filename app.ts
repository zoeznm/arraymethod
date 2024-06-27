interface Items {
  name:string;
  stock : number;
} 
// const items : Items [] = [
//   {name : "콜라", stock : 5},
//   {name : "사이다", stock : 0},
//   {name : "물", stock : 10},
//   {name : "주스", stock : 0}
// ];

// const availableItems = items.filter((item)=> {
//   return item.stock>0;})

// const items : Items [] = [
//    {name : "콜라", price :1000 },
//    {name : "사이다", price : 1200},
//    {name : "물", price : 800},
//    {name : "주스", price : 1500}
// ];

// const itemList = items.map((item)=>{
//   return `${item.name} : ${item.price}원`;
// })

//  const items : Items [] = [
//    {name : "콜라", stock : 5},
//    {name : "사이다", stock : 0},
//    {name : "물", stock : 10},
//    {name : "주스", stock : 2}
//  ];

//  const sortedItems = items.sort((a,b)=>{
//   return b.stock - a.stock;
//  })

 const items : Items[] = [
  {name : "콜라", stock : 5},
  {name : "사이다", stock : 0},
  {name : "물", stock : 10},
  {name : "주스", stock : 2}
];

const soda= items.find((item)=>{
  return item.name === "사이다";
});