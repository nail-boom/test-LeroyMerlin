const payments = [
  { createdAt: 1623456006400, sum: 300 },
  { createdAt: 1602374400000, sum: 144 },
  { createdAt: 1607731200320, sum: 300 },
  { createdAt: 1602374400300, sum: 20 },
  { createdAt: 1589155200000, sum: 10 },
  { createdAt: 1589155200020, sum: 250 },
  { createdAt: 1623456000000, sum: 170 },
  { createdAt: 1589155200000, sum: 300 },
  { createdAt: 1620691200100, sum: 40 },
  { createdAt: 1607731200010, sum: 200 },
  { createdAt: 1620691204100, sum: 15 },
  { createdAt: 1620691254500, sum: 15 },
  { createdAt: 1623456000400, sum: 37 },
  { createdAt: 1623456006800, sum: 200 },
  { createdAt: 1607731208320, sum: 400 },
  ];

function arrSortSum(payments){
  function sortirovka(field) {
    return (a, b) => a[field] > b[field] ? -1 : 1;
  }
  payments.sort(sortirovka('sum'));
  return payments.slice(0,3); 
}
arrSortSum(payments).forEach(el => console.log(`"${new Date(el.createdAt).toLocaleDateString("en-US")}":${el.sum}`))
