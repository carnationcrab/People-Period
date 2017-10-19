myApp.controller('CheckInController', function (TrackerService, $mdDialog) {
    console.log('CheckInController created');

    var vm = this;
    vm.flow = '';
    vm.mood = '';
    vm.symptoms = [];
    vm.status = ' ';
    vm.items = [1, 2, 3, 4, 5];
    vm.TrackerService = TrackerService;

    vm.data = {
        flow: 'light',
        hasPeriod: 'no',
        date: new Date(),
    };



    if (vm.data.hasPeriod = 'no') {
        vm.flow = 'none';
    };

    vm.changeFlow = function () {
        vm.flow = 'none';
    };

    vm.toggleHeavy = function () {
        vm.heavy = true
        console.log(vm.heavy);
        if (vm.heavy) {
            vm.flow = 'heavy';
        }
    };
    vm.toggleMedium = function () {
        vm.medium = true
        console.log(vm.medium);
        if (vm.medium) {
            vm.flow = 'medium';
        }
    };

    vm.toggleLight = function () {
        vm.light = true
        console.log(vm.light);
        if (vm.light) {
            vm.flow = 'light';
        }
    };

    vm.toggleVeryBad = function () {
        vm.veryBad = true
        console.log(vm.veryBad);
        if (vm.veryBad) {
            vm.mood = 'very bad';
        }
    };

    vm.toggleBad = function () {
        vm.bad = true
        console.log(vm.bad);
        if (vm.bad) {
            vm.mood = 'bad';
        }
    };

    vm.toggleNeutral = function () {
        vm.neutral = true
        console.log(vm.neutral);
        if (vm.neutral) {
            vm.mood = 'neutral';
        }
    };

    vm.toggleGood = function () {
        vm.good = true
        console.log(vm.good);
        if (vm.good) {
            vm.mood = 'good';
        }
    };

    vm.toggleVeryGood = function () {
        vm.veryGood = true
        console.log(vm.veryGood);
        if (vm.veryGood) {
            vm.mood = 'very good';
        }
    };

    vm.submit = function () {
        console.log('submit clicked');
        var niceDate = new Date().toDateString();
        var periodBoolean = '';
        
        if (vm.data.hasPeriod==='yes') {
            periodBoolean= true;
        }else {
            periodBoolean= false;
        }

        vm.currentCheckIn = {
            dateStatus: niceDate,
            periodStatus: periodBoolean,
            flowStatus: vm.flow,
            moodStatus: vm.mood,
            symptomStatus: vm.symptoms

        }
        console.log('currentCheckIn', vm.currentCheckIn);
        TrackerService.sortDates(vm.currentCheckIn);
    }

});