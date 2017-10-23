myApp.service('TrackerService', function ($http) {
    var sv = this;
    // Object that will store our user data
    console.log('in TrackerService');
  
    sv.period = {
        days: [] 
    };

    sv.noPeriod = {
        days: []
    };

    sv.allDays = {
        days: []
    };

    sv.newCycle = [];
    sv.cycleCount = '';

    sv.periodDays = [];
    sv.periodCount = '';

    // sv.displayDash = function () {
    //     $http({
    //         method: 'GET',
    //         url: '/checkIn'
    //     }).then(function (response) {
    //         console.log('res:', response);
    //         sv.forSale.homes = response.data;
    //         console.log('sv.forSale:', sv.forSale);
    //     });
    // }

    sv.sortDates = function(checkIn) {
        if (checkIn.periodStatus) {
            sv.period.days.push(checkIn);
            console.log('added to period', sv.period);
        }
        else {
            sv.noPeriod.days.push(checkIn);
            console.log('added to noPeriod', sv.noPeriod)
        } 

        sv.addDay(checkIn);
    }

    sv.addDay = function (checkIn) {
        console.log('in addDay', checkIn)
        $http({
            method: 'POST',
            url: '/checkIn',
            data: checkIn
        }).then(function(response){
            console.log('checkIn posted', response);
            //sv.displayDash();
        });
    };

    sv.getAllCycles = function() {
        $http({
            method: 'GET',
            url: '/checkIn'
        }).then(function (response) {
            console.log('res:', response);
            sv.allDays.days = response.data;
            console.log('sv.allDays.days:', sv.allDays.days);
            return('moving on');
        }).then(function(){
            sv.makeNewCycle();
    });
};
 sv.makeNewCycle = function() {
     //removing first day of new cycle
        sv.allDays.days.shift();

        sv.cycleCount = sv.allDays.days.length;
        
        sv.getPeriodDays();
        console.log('cycleCount', sv.cycleCount, 'periodCount', sv.periodCount);
        sv.superCycle = [ {
            periodStat: sv.periodCount,
            cycleStat: sv.cycleCount,
        }];

        sv.addCycle(sv.superCycle);
        
    }


    sv.calculateCycle = function() {
        sv.getAllCycles();
        

    }

    sv.getPeriodDays = function() {
        console.log(sv.periodDays);
        sv.periodCount = '';

        for (var i = 0; i < sv.allDays.days.length; i++) {
            if (sv.allDays.days[i].period=== true) {
                sv.periodDays.push(sv.allDays.days[i]);
                sv.periodCount++

            };
            console.log('periodDays', sv.periodDays);


    };
};

sv.addCycle = function (cycleToAdd) {
    console.log('in addCycle', cycleToAdd)
    $http({
        method: 'POST',
        url: '/cycles',
        data: cycleToAdd,
    }).then(function(response){
        console.log('checkIn posted', response);
        //sv.displayDash();
    });
};


});
   