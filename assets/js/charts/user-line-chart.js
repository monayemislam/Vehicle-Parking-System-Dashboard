
//setup block
const userTypePieChartData = {
    labels: ['Providers', 'Finders'],
        datasets: [{
            label: 'Types of User',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            hoverOffset:6,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
}
//options

const userTypePieCharOptions = {
    plugins: {
        legend:{
            display:true,
            position: 'bottom'
        }
    }
}

//config block
const userTypePieChartConfig= {
    type: 'line',
    data: userTypePieChartData,
    options: userTypePieCharOptions
}
//render block
const userTypePieChartRender = new Chart(
    document.getElementById('userTypePieChart'),userTypePieChartConfig
);


