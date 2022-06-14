
//setup block
const parkingSpaceTypeBarChartData = {
    labels: ['Car', 'Micro', 'Bike', 'Cavard Van'],
        datasets: [{
            label: 'Types of User',
            data: [121, 320,56,300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(252, 188, 60,.2)',
            ],
            hoverOffset:6,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
}
//options

const parkingSpaceTypeBarChartOptions = {
    plugins: {
        legend:{
            display:false,
            position: 'bottom'
        }
    },
    scales: {
        y: {
          beginAtZero: true,
          max: 400,
          min: 0,
          ticks: {
                // callback: function(value, index, values) {
                //     return value + ' M';
                // },
                // stepSize: 5
            }
        }
      }
}

//config block
const parkingSpaceTypeBarChartConfig= {
    type: 'bar',
    data: parkingSpaceTypeBarChartData,
    options: parkingSpaceTypeBarChartOptions
}
//render block
const parkingSpaceTypePieChart = new Chart(
    document.getElementById('parkingSpaceTypePieChart'),parkingSpaceTypeBarChartConfig
);


 