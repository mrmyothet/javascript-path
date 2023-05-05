// Accessing the objects
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

// Values from the form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');

let yearlyTotal = 0;

const monthlySales = new Set();
const monthlyLabels = new Set();

// add chain the different values 
// const test = new Set();
// test.add(5).add(6);

// const test = new Set([1, 20, 39]);
// console.log(test);

// const test = new Set([{message: 'Hello World'}]);
// console.log(test);

const categories = new WeakSet();
let hiking = {category: 'Hiking'};
let running = {category: 'Running'};
let hunting = {category: 'Hunting'};


function addSale(){
    monthlySales.add(parseInt(newAmount.value));
    monthlyLabels.add(newMonth.value);
    // alert('You have entered in ' + monthlySales.size + ' sales.');
    // console.log(monthlySales);

    // for (let total of monthlySales) console.log(total);

    yearlyTotal = 0; 

    monthlySalesChart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    })

    for(let amount of monthlySales){
        yearlyTotal += amount;
        
        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount);
        })
    }
    yearlyLabel.innerHTML = yearlyTotal;

    monthlySalesChart.data.labels = Array.from(monthlyLabels);
    monthlySalesChart.update();

    if(hikingRadio.checked){
        categories.add(hiking);
    }
    if (runningRadio.checked){
        categories.add(running);
    }
    if(huntingRadio.checked){
        categories.add(hunting);
    }
    console.log(categories);
}

// Iterating Set using 'for of' 
function addTotal(){
    for(let amount of monthlySales){    
        yearlyTotal += amount;
        
        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount);
        })
    }
}

 // Iterating Set using 'forEach'
function deleteVal(){
    // monthlySales.delete('1500');
    // console.log(monthlySales);
    monthlySales.forEach((value1, value2, monthlySales) => {   
        alert(value1);
    })
}

// Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
        
//     }
// })