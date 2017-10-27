myApp.controller('UserController', function(UserService, TrackerService) {
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
vm.oneSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-1][1] / vm.allSymptomCount * 100;
console.log('one', vm.numberOneSymptom, vm.oneSymptomPercent);
vm.numberTwoSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-2][0];
vm.twoSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-2][1] / vm.allSymptomCount  * 100;
vm.numberThreeSymptom = vm.sortedSymptoms[vm.sortedSymptoms.length-3][0];
vm.threeSymptomPercent = vm.sortedSymptoms[vm.sortedSymptoms.length-3][1] / vm.allSymptomCount * 100;

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

 vm.sortedMoods = [];
 vm.sortedMoods = Object.keys(moodCounts).map(function(key) {
  return [String(key), moodCounts[key]];
});

console.log(vm.sortedMoods, moodCount);

vm.sortedMoods.sort(function(a, b) {
return a[1] - b[1];
});

vm.mainMood = vm.sortedMoods[vm.sortedMoods.length-1][0];
vm.avgMood = vm.sortedMoods[vm.sortedMoods.length-1][1] / moodCount * 100;

console.log('main mood', vm.mainMood, 'avg', vm.avgMood);

//pick moodpic

if (vm.mainMood==="very bad") {
  vm.moodPic="../../../vendors/icons/superbad.svg";
}
if (vm.mainMood==="bad") {
  vm.moodPic="../../../vendors/icons/somewhatunhappy.svg";
}
if (vm.mainMood==="neutral") {
  vm.moodPic="../../../vendors/icons/neutral.svg";
}
if (vm.mainMood==="good") {
  vm.moodPic="../../../vendors/icons/somewhathappy.svg";
}
if (vm.mainMood==="very good") {
  vm.moodPic="../../../vendors/icons/superhappy.svg";
}

console.log(vm.moodPic)
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
