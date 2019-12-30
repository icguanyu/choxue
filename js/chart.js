var ctx = document.getElementById('event-tracking').getContext('2d');
var ctx_A = document.getElementById('team_A').getContext('2d');
var ctx_B = document.getElementById('team_B').getContext('2d');

var mydata = [
  {
    label: "My First dataset",
    data: [6, -1, 3, -5, 2, 2],
    backgroundColor: colors
  },
  {
    data: [-2, 3, 1, -4, 7, -1],
    backgroundColor: colors
  },
  {
    data: [-3, -6, -2, -3, 1, -2],
    backgroundColor: colors
  },
  {
    data: [-4, -4, -6, -4, 6, -3],
    backgroundColor: colors
  },
  {
    data: [1, 5, 5, -5, 4, -4],
    backgroundColor: colors
  },
  {
    data: [4, -2, 2, -3, 6, 2],
    backgroundColor: colors
  }]

/*判斷colors*/
function colors(e) {
  var colors = []
  e.dataset.data.forEach((val, index) => {
    if (val < 0) {
      colors[index] = '#ffe900'
    } else {
      colors[index] = '#601eaa'
    }
  })
  return colors
}

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["1", "2", "3", "4", "5", "6"], // 標題
    datasets: mydata
  },
  options: {
    maintainAspectRatio: false, // 不強制維持比例
    
    legend: {
      display: false, // 圖示
    },
    tooltips: {
      enabled: false // 關閉滑鼠hover出現的小工具提示
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true, // 背景格線
          },
          labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
          ticks: {
            display: true
          },
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true, // 背景格線
          },
          ticks: {
            display: true, // Y軸資料比對 true
            reverse: false, // 反轉 預設 fasle
            beginAtZero: true,
            steps: 1,
            stepSize: 2,
            max: 10,
            min: -10
          }
        }]
    }
  }
})

var myChart1 = new Chart(ctx_A, {
  type: 'horizontalBar',
  data: {
    labels: ["得分", "籃板", "助攻", "抄截", "阻攻", "失誤數", "投籃%", "三分球%", "罰球%"], // 標題
    datasets: [{
      data: [40, 30, 50, 20, 32, 64, 41, 59, 31],
      backgroundColor: '#ffe900'
    }]
  },
  options: {
    maintainAspectRatio: false, // 不強制維持比例
    legend: {
      display: false, // 圖示
    },
    tooltips: {
      enabled: false // 關閉滑鼠hover出現的小工具提示
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: true, // 背景格線
          },
          ticks: {
            reverse: true,
            display: true, // 軸上的數字
            beginAtZero: true,
            steps: 5,
            stepSize: 25,
            max: 100,
            min: 0
          },
        }
      ],
      yAxes: [
        {
          barPercentage: 0.8,
          categoryPercentage: 1,
          gridLines: {
            display: false, // 背景格線
          },
          ticks: {
            display: true, // Y軸資料比對 true
            reverse: false, // 反轉 預設 fasle
          }
        }]
    },
    hover: {
      animationDuration: 0
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = this.chart.ctx;
        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x - 20, bar._model.y + 5);
          });
        });
      }
    }
  },

})

var myChart2= new Chart(ctx_B, {
  type: 'horizontalBar',
  data: {
    labels: ["得分", "籃板", "助攻", "抄截", "阻攻", "失誤數", "投籃%", "三分球%", "罰球%"], // 標題
    datasets: [{
      data: [40, 30, 50, 20, 32, 64, 41, 59, 31],
      backgroundColor: '#601eaa'
    }]
  },
  options: {
    maintainAspectRatio: false, // 不強制維持比例
    legend: {
      display: false, // 圖示
    },
    tooltips: {
      enabled: false // 關閉滑鼠hover出現的小工具提示
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true, // 背景格線
          },
          ticks: {
            display: true, // 軸上的數字
            beginAtZero: true,
            steps: 1,
            stepSize: 25,
            max: 100,
            min: 0
          },
        }
      ],
      yAxes: [
        {
          barPercentage: 0.8,
          categoryPercentage: 1,
          position: 'right',
          gridLines: {
            display: false, // 背景格線
          },
          ticks: {
            display: true, // Y軸資料比對 true
            reverse: false, // 反轉 預設 fasle
          }
        }]
    },
    hover: {
      animationDuration: 0
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = this.chart.ctx;
        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x + 10, bar._model.y + 5);
          });
        });
      }
    }
  },

})
