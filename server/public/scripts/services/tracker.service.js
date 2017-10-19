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
});