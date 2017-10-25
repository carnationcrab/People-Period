myApp.controller('DashboardController', function(TrackerService) {
    console.log('DashBoardControllerCreated');
    var vm = this;

    var now = new Date();
    
    this.month = now.getMonth();
    this.year  = now.getFullYear();

    this.calDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // these are human-readable month name labels, in order
    var calMonths = ['January', 'February', 'March', 'April',
                         'May', 'June', 'July', 'August', 'September',
                         'October', 'November', 'December'];
    
    // these are the days of the week for each month, in order
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   
    

    //first day of month
    var firstDay = new Date(this.year, this.month, 1);

    //starting day of month
    var startingDay = firstDay.getDay();

    var lengthOfMonth = daysInMonths[this.month];

    //leap year!!
    if (this.month == 1) { // February only!
        if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
          lengthOfMonth = 29;
        }
      }

      this.monthName = calMonths[this.month];

      console.log('now', now, 'this.month', this.month, 'this.year', this.year, 'firstDay', firstDay, 'startingDay', startingDay, 'lengthOfMonth', lengthOfMonth, 'monthName', this.monthName)


      //days
      var day = 1;
      vm.listOfDays = [];

      //making sure it starts on the right day
      //monday
      for (var j = 0; j < startingDay; j++) {
          vm.listOfDays.push(' ')
      };
    
      // this loop is for is weeks (rows)
      for (var i = 0; i < lengthOfMonth; i++) {
          if (day <= lengthOfMonth) {
            vm.listOfDays.push(day);
            day++;
          };
        }
        
    console.log(vm.listOfDays)

    
});