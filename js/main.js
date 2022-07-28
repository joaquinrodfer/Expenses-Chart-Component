data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

let max = 0;
const charts = document.querySelectorAll(".chart")

for (let chart of data){
    if (chart.amount>max){
        max = chart.amount;
    }
}

for (let chart in data){
  let height = data[chart].amount * 150 / max;
  const heightPx = height + "px";
  charts[chart].style.height = heightPx;
  charts[chart].setAttribute("title",`$${data[chart].amount}`)
}