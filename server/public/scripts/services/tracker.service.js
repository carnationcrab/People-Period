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
        console.log('in make new cycle');
        sv.newCycle = [];
        console.log('new cycle', sv.newCycle);
        sv.newCycle.push(sv.allDays.days.shift());
        console.log('sv.newCycle', sv.newCycle, 'sv.allDays.days', sv.allDays.days);
        
        for (var i = 0; i < sv.allDays.days.length; i++) {
            if (sv.allDays.days[i].firstDay=== false) {
                sv.newCycle.push(sv.allDays.days[i]);
            } else {
                break;
            }
            
        }
        console.log('completed new cycle', sv.newCycle);
        
    }


    sv.calculateCycle = function() {
        sv.getAllCycles();
        

    }
});
   