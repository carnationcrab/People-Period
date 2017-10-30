myApp.controller('CheckInController', function (TrackerService, $mdDialog, $mdSidenav) {
    console.log('CheckInController created');

    var vm = this;
    vm.flow = '';
    vm.mood = '';
    vm.symptoms = [];
    vm.status = ' ';
    vm.items = [1, 2, 3, 4, 5];
    vm.firstDay = 'no';
    vm.TrackerService = TrackerService;
    vm.niceDate = new Date();

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
        swal("Yay!", "Check in completed for the day!", "success");
        console.log('submit clicked');
        //var niceDate = new Date();
        vm.niceDate = new Date(vm.niceDate);

        console.log('in submit with', 
        'date', vm.niceDate,
        'period', vm.data.hasPeriod,
        'flow', vm.flow,
        'mood', vm.mood,
        'symptoms', vm.symptoms,
        'cycle', vm.firstDay);

        var periodBoolean = '';
        var firstDayBoolean = '';
        
        if (vm.data.hasPeriod==='yes') {
            periodBoolean= true;
        }else {
            periodBoolean= false;
        }

        if (vm.firstDay==='yes') {
            firstDayBoolean= true;
        }else {
            firstDayBoolean= false;
        }

        vm.currentCheckIn = {
            dateStatus: vm.niceDate,
            periodStatus: periodBoolean,
            flowStatus: vm.flow,
            moodStatus: vm.mood,
            symptomStatus: vm.symptoms,
            cycleStatus: firstDayBoolean,

        }
        console.log('currentCheckIn', vm.currentCheckIn);
        TrackerService.sortDates(vm.currentCheckIn);
        
        if (vm.currentCheckIn.cycleStatus) {
            console.log('restarting the cycle!');
            TrackerService.calculateCycle();
    }
    }
    


    });