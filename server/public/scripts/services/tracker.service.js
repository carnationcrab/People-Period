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

    sv.averageCycle = {count: ''};

    sv.periodDays = [];
    sv.averagePeriod = {count: ''};

    sv.allLengths = [];

    sv.newCycle = {start: ''};

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

        //set start and end
        var cycleStart = sv.allDays.days[sv.allDays.days.length-1].date;
        var cycleEnd = sv.allDays.days[0].date;

        console.log('cycleStart', cycleStart, 'cycleEnd', cycleEnd);

        startMilli = new Date(cycleStart);
        startMilli = startMilli.getTime();
        

        sv.endMilli = new Date(cycleEnd);
        sv.endMilli = sv.endMilli.getTime();
        

        console.log(startMilli, sv.endMilli);


        //figure out the days
        var seconds = (sv.endMilli - startMilli) / 1000;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        console.log('cycle start:', cycleStart, 'cycle end:', cycleEnd, 'seconds:', seconds, 'minutes:', minutes, 'hours:', hours, 'days:', days)


        sv.cycleCount = days;
        
        sv.getPeriodDays();
        console.log('cycleCount', sv.cycleCount, 'periodCount', sv.periodCount);

        //make the cycle to add to database
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
        };
            console.log('periodDays', sv.periodDays);
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

sv.getAllLengths = function() {
    console.log('in get all lengths')
    return $http({
        method: 'GET',
        url: '/cycles'
    }).then(function (response) {
        console.log('res:', response);
        sv.allLengths = response.data;
        console.log('sv.allLengths:', sv.allLengths);
        return('moving on');
    }).then(function(){
        sv.averageLengths();
        
})
};

sv.averageLengths = function() {
    var allPeriods = [];
    var allCycles = [];
    console.log(sv.allLengths)
    for (var i = 0; i < sv.allLengths.length; i++) {
        allPeriods.push(sv.allLengths[i].periodLen);
        allCycles.push(sv.allLengths[i].cycleLen);    
    }
    console.log('cycles', allCycles, 'periods', allPeriods);

    var periodSum = 0; 
    for (var k = 0; k < allPeriods.length; k++) {
        periodSum = periodSum + allPeriods[k];   
    }

    var cycleSum = 0; 
    for (var f = 0; f < allPeriods.length; f++) {
        cycleSum = cycleSum + allCycles[f];  
    }

    var avgPeriod = periodSum / (allPeriods.length);
    var avgCycle = cycleSum / (allCycles.length);

    sv.averagePeriod.count = avgPeriod;
    sv.averageCycle.count = avgCycle;

    console.log('periodsum', periodSum, 'cycleSum', cycleSum, 'avg period', avgPeriod, 'avg cycle', avgCycle);
    sv.calculateLength(avgPeriod, avgCycle);
}

sv.calculateLength = function(period, cycle) {
    $http({
        method: 'GET',
        url: '/checkIn'
    }).then(function (response) {
        console.log('res:', response);
        sv.allDays.days = response.data;
        console.log('sv.allDays.days:', sv.allDays.days);
        return('moving on');
    }).then(function(response){
        var cycleEnd = sv.allDays.days[0].date;

    cycleEnd = new Date(cycleEnd).getDate();
    // // sv.periodMilli = period * 24 * 60 * 60 * 1000;
    // sv.cycleMilli = cycle * 24 * 60 * 60 * 1000;

    sv.nextCycle = new Date();
    sv.nextCycle.setDate(cycleEnd + period);
    // sv.nextCycle = new Date(cycleEnd + sv.cycleMilli);
    console.log('next cycle start', sv.nextCycle);
    sv.newCycle.start = sv.nextCycle;
    });

    
};

sv.getCycles = function() {
    return $http({
        method: 'GET',
        url: '/checkIn'
    }).then(function(response){ sv.allDays.days = response.data;})}

});
   