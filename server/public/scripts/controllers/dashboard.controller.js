myApp.controller('DashboardController', function(TrackerService) {
//     console.log('DashBoardControllerCreated');
//     var vm = this;

//     vm.symptoms = { };
//     TrackerService.getAllLengths();
    
//     vm.avgPeriod = TrackerService.averagePeriod;
//     vm.avgCycle = TrackerService.averageCycle;
//     vm.newCycleStart = TrackerService.newCycle;
//     vm.sortedSymptoms = [];
//     vm.numberOneSymptom = '';
//     vm.numberTwoSymptom = '';
//     vm.numberThreeSymptom = '';
//     vm.oneSymptomPercent = '';
//     vm.twoSymptomPercent = '';
//     vm.threeSymptomPercent = '';

    
//     console.log(vm.avgPeriod, vm.avgCycle, vm.newCycleStart)

//     //finding most frequent symptoms
//     vm.cycle = TrackerService.allDays.days

//     vm.inAllSymptoms = function(checkins) {
//         vm.allSymptomCount = 0;
//         for (var k = 0; k < checkins.length; k++) {
//             for (var i = 0, j = checkins[k].symptoms.length; i < j; i++) {
//                 vm.symptoms[checkins[k].symptoms[i]] = (vm.symptoms[checkins[k].symptoms[i]] || 0) + 1;
//                 vm.allSymptomCount++
//              }
            
//         }
//         console.log('symptoms', vm.symptoms)
//        vm.sortedSymptoms = [];
//        vm.sortedSymptoms = Object.keys(vm.symptoms).map(function(key) {
//         return [String(key), vm.symptoms[key]];
//       });
      
//       console.log(vm.sortedSymptoms, vm.allSymptomCount);

//   vm.sortedSymptoms.sort(function(a, b) {
//      return a[1] - b[1];
//  });
//  console.log('sorted symptoms', vm.sortedSymptoms)

//  vm.numberOneSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-1][0];
//  vm.oneSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-1][1] / vm.allSymptomCount * 100;
//  console.log('one', vm.numberOneSymptom, vm.oneSymptomPercent);
//  vm.numberTwoSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-2[0]];
//  vm.twoSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-2[1]] / vm.allSymptomCount  * 100;
//  vm.numberThreeSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-3[0]];
//  vm.threeSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-3[1]] / vm.allSymptomCount * 100;


//     }
    
//   vm.inAllSymptoms(TrackerService.allDays.days);  

  
    
});