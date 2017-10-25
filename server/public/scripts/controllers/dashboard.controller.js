myApp.controller('DashboardController', function(TrackerService) {
    console.log('DashBoardControllerCreated');
    var vm = this;
    TrackerService.getAllLengths();
    
    vm.avgPeriod = TrackerService.averagePeriod;
    vm.avgCycle = TrackerService.averageCycle;
    vm.newCycleStart = TrackerService.newCycle;
    
    console.log(vm.avgPeriod, vm.avgCycle, vm.newCycleStart)

    
  //bringing in the variables from the service
    
    
    


    
});