let count = 0;
let ctx = document.getElementById("chart").getContext("2d");
let chart = new Chart(ctx, {
  type: "line",
  data: {
	 labels: ["", "", "", ""],
	 datasets: [
		{
		  label: "1",
		  backgroundColor: "#79AEC8",
		  borderColor: "#417690",
      tension: 0.4,
		  data: [26900, 28700, 27300, 29200]
		}
	 ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
  },
scales: {
      y: {
        ticks: {
          display: false
        }
      }
    },    
animation: {
            duration: 1500
        },   
	 title: {
		text: "Gross Volume in 2020",
		display: true
	 }
  }
});


setInterval(function() {
    switch (count % 3) {
      case 0: chart.data.datasets[0].data = [1, 5, 2, 6];
      break;
      case 1: chart.data.datasets[0].data = [6, 2, 4, 2];
      break;
      case 2: chart.data.datasets[0].data = [3, 6, 3, 4];
      break;  
    }
    chart.update();
    count++;
}, 2000);
