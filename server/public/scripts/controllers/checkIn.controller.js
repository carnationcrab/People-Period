myApp.controller('CheckInController', function (TrackerService, $mdDialog) {
        var vm = this;

        vm.status = ' ';
        vm.items = [1, 2, 3, 4, 5];

        console.log('CheckInController created');

        vm.TrackerService = TrackerService;

        // vm.showAdvanced = function(event) {
        //     $mdDialog.show ({
        //        clickOutsideToClose: true,
        //        scope: vm,        
        //        preserveScope: true,           
        //        templateURL: '/views/templates/quiz.html'
        //        controller: function DialogController($mdDialog) {
        //            var vm = this;
        //            vm.closeDialog = function() {
        //              $mdDialog.hide();
        //           }
        //        }
        //     });
        //  };          
        vm.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
    //     vm.symptoms = [{
    //         name: chills
    //     }, {
    //       name: irritable
    //   }];
        vm.data = {
          flow : 'light',
          hasPeriod : true,
          date : new Date(),
          mood: 'happy',
        };
        
            // Lists of fruit names and Vegetable objects
          vm.message = 'false';

        
          vm.onChange = function(hasPeriodState) {
              vm.message = hasPeriodState;
          };

          vm.onChange = function(flowState) {
              vm.message = flowState;
          }
          
          

        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) {
            return {
                abbrev: state
            };
        });
    })
        
    .config(function ($mdThemingProvider) {

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    });