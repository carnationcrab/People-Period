myApp.controller('UserController', function(UserService, TrackerService, $scope) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.symptoms = { };
  
  
  vm.avgPeriod = TrackerService.averagePeriod;
  vm.avgCycle = TrackerService.averageCycle;
  vm.newCycleStart = TrackerService.newCycle;
  vm.sortedSymptoms = [];
  vm.numberOneSymptom = '';
  vm.numberTwoSymptom = '';
  vm.numberThreeSymptom = '';
  vm.oneSymptomPercent = '';
  vm.twoSymptomPercent = '';
  vm.threeSymptomPercent = '';
  vm.avgMood = 0;
  var allMoods = [];
  var moodCounts = [];
  var mainMood = '';
  var moodNumbers = []
  vm.data = '';
  vm.labels = [];

  vm.moodPic = '';

  

  console.log(vm.avgPeriod, vm.avgCycle, vm.newCycleStart)

  //finding most frequent symptoms
  

  vm.inAllSymptoms = function(checkins) {
      vm.allSymptomCount = 0;
      for (var k = 0; k < checkins.length; k++) {
          for (var i = 0, j = checkins[k].symptoms.length; i < j; i++) {
              vm.symptoms[checkins[k].symptoms[i]] = (vm.symptoms[checkins[k].symptoms[i]] || 0) + 1;
              vm.allSymptomCount++
           }
          
      }
      console.log('symptoms', vm.symptoms)
     vm.sortedSymptoms = [];
     vm.sortedSymptoms = Object.keys(vm.symptoms).map(function(key) {
      return [String(key), vm.symptoms[key]];
    });
    
    console.log(vm.sortedSymptoms, vm.allSymptomCount);

vm.sortedSymptoms.sort(function(a, b) {
   return a[1] - b[1];
});
console.log('sorted symptoms', vm.sortedSymptoms)

vm.numberOneSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-1][0];
vm.oneSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-1][1] / TrackerService.allDays.days.length * 100;
console.log('one', vm.numberOneSymptom, vm.oneSymptomPercent);
vm.numberTwoSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-2][0];
vm.twoSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-2][1] / TrackerService.allDays.days.length  * 100;
vm.numberThreeSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-3][0];
vm.threeSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-3][1] / TrackerService.allDays.days.length * 100;

  //also average moods
  var moodCount = 0
  for (var i = 0; i < TrackerService.allDays.days.length; i++) {
    moodCount++
    allMoods.push(TrackerService.allDays.days[i].mood)
  }
  for (var i = 0, j = allMoods.length; i < j; i++) {
    moodCounts[allMoods[i]] = (moodCounts[allMoods[i]] || 0) + 1;
 }
 console.log(moodCounts);

 moodNumbers = [];

 for (var a = 0; a < allMoods.length; a++) {
   if (allMoods[a]==="very bad") {
  moodNumbers.push(1);
}
if (allMoods[a]==="bad") {
  moodNumbers.push(2);
}
if (allMoods[a]==="neutral") {
  moodNumbers.push(3);
}
if (allMoods[a]==="good") {
  moodNumbers.push(4);
}
if (allMoods[a]==="very good") {
  moodNumbers.push(5);
}
 }

 for (var a = 0; a < TrackerService.allDays.days.length; a++) {
  vm.labels.push(new Date(TrackerService.allDays.days[a].date).toLocaleDateString());
}


 console.log('moodnumbers', moodNumbers, vm.labels)

 moodNumbers = moodNumbers.slice(0,7);
 vm.labels= vm.labels.slice(0,7);
 vm.labels.reverse();
 moodNumbers.reverse();
 vm.data = moodNumbers;
 vm.onClick = function (points, evt) {
console.log(points, evt); };
$scope.onClick= vm.onClick;
$scope.data= [vm.data];
$scope.labels= vm.labels;
$scope.series = ['Mood Level'];
$scope.options = {
  scales: {
    yAxes: [
      {
        id: 'y-axis-1',
        type: 'linear',
        display: true,
        position: 'left'
      }
    ]
  }
};

  };
  




vm.getAllCycles = function() {
  TrackerService.getCycles().then(function() {vm.inAllSymptoms(TrackerService.allDays.days)});
}
vm.getAllLengths = function() {
  console.log('doing get all lengths controller side')
  TrackerService.getAllLengths().then(function() {vm.getAllCycles()});


     }; 

vm.getAllLengths();


});
