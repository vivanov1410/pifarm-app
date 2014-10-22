
'use strict';

angular.module('pifarm.app')
.controller('DeviceDashboardCtrl', function ($scope, $window, Devices, device) {
  
  $window.document.title = 'Device Dashboard | Pifarm';

  $scope.device = device;

  Devices.getLatestStats(device)
    .then(function (stats) {
      stats.uptime = moment().seconds(stats.uptime).fromNow(true);
      stats.memory.available = stats.memory.total - stats.memory.used;
      stats.hdd.available = stats.hdd.total - stats.hdd.used;
      $scope.stats = stats;
    });

  var start = moment().subtract(1, 'day').startOf('day').unix(),
      end   = moment().subtract(1, 'day').endOf('day').unix();

  var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  Devices.getStatsByDate(device, start, end)
    .then(function (stats) {
      var data = _.map(hours, function (hour) {
        // get dates between hour and next hour
        var total = 0,
            count = 0;
        _.each(stats, function (stat) {
          if(stat.at.hour() == hour) {
            total += stat.temperature.cpu;
            count++;
          }
        });

        // get average temp for this period
        return parseInt(total/count);
      });

      $scope.temperatures = {
        labels: hours,
        datasets: [
          {
            label: "CPU temperature",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: data
          }
        ]
      };
    }); 

  $scope.temperatures = {
    labels: hours,
    datasets: [
      {
        label: "CPU temperature",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: []
      }
    ]
  }; 

  $scope.someOptions = {
      segementStrokeWidth: 20,
      segmentStrokeColor: '#000'
  };

});