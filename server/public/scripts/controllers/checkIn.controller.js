myApp.controller('CheckInController', function (TrackerService, $mdDialog) {
    var vm = this;
    vm.flow = '';
    vm.mood = '',

        vm.status = ' ';
    vm.items = [1, 2, 3, 4, 5];

    console.log('CheckInController created');

    vm.TrackerService = TrackerService;

    vm.data = {
        flow: 'light',
        hasPeriod: 'no',
        date: new Date(),
    };

    vm.symptoms = []

    if (vm.data.hasPeriod = 'no') {
        vm.flow = 'none';
    };


// Lists of fruit names and Vegetable objects


// vm.onChange = function (hasPeriodState) {
//     vm.message = hasPeriodState;
//     vm.flow = 'none';
//     console.log('flow', vm.flow)
// };

vm.changeFlow = function() {
    vm.flow = 'none';
}

vm.toggleHeavy = function () {
    vm.heavy = true
    console.log(vm.heavy);
    if (vm.heavy) {
        vm.flow = 'heavy';
    }
}
vm.toggleMedium = function () {
    vm.medium = true
    console.log(vm.medium);
    if (vm.heavy) {
        vm.flow = 'medium';
    }
}

vm.toggleLight = function () {
    vm.light = true
    console.log(vm.light);
    if (vm.light) {
        vm.flow = 'light';
    }
}

vm.toggleVeryBad = function () {
    vm.veryBad = true
    console.log(vm.veryBad);
    if (vm.veryBad) {
        vm.mood = 'very bad';
    }
}

vm.toggleBad = function () {
    vm.bad = true
    console.log(vm.bad);
    if (vm.bad) {
        vm.mood = 'bad';
    }
}

vm.toggleNeutral = function () {
    vm.neutral = true
    console.log(vm.neutral);
    if (vm.neutral) {
        vm.mood = 'neutral';
    }
}

vm.toggleGood = function () {
    vm.good = true
    console.log(vm.good);
    if (vm.good) {
        vm.mood = 'good';
    }
}

vm.toggleVeryGood = function () {
    vm.veryGood = true
    console.log(vm.veryGood);
    if (vm.veryGood) {
        vm.mood = 'very good';
    }
}
});