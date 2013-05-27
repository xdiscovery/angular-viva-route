/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the mapsService and associates it with the $scope
//The $scope is ultimately bound to the maps view
app.controller('mapsController', function ($scope, mapsService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.maps = mapsService.getMaps();
    }

    $scope.insertMap = function () {
        var title = $scope.newMap.title;
        var about = $scope.newMap.about;
        mapsService.insertMap(title, about);
        $scope.newMap.title = '';
        $scope.newMap.about = '';
    };

    $scope.deleteMap = function (id) {
        mapsService.deleteMap(id);
    };
});

//This controller retrieves data from the mapsService and associates it with the $scope
//The $scope is bound to the order view
app.controller('mapsOrdersController', function ($scope, $routeParams, mapsService) {
    $scope.map = {};
    $scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab mapID off of the route        
        var mapID = ($routeParams.mapID) ? parseInt($routeParams.mapID) : 0;
        if (mapID > 0) {
            $scope.map = mapsService.getMap(mapID);
        }
    }

});

//This controller retrieves data from the mapsService and associates it with the $scope
//The $scope is bound to the orders view
app.controller('OrdersController', function ($scope, mapsService) {
    $scope.maps = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.maps = mapsService.getMaps();
    }
});

app.controller('NavbarController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});

//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a map. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.

app.controller('OrderChildController', function ($scope) {
    $scope.orderby = 'product';
    $scope.reverse = false;
    $scope.ordersTotal = 0.00;

    init();

    function init() {
        //Calculate grand total
        //Handled at this level so we don't duplicate it across parent controllers
        if ($scope.map && $scope.map.author) {
            var total = 0.00;
            for (var i = 0; i < $scope.map.author.length; i++) {
                var order = $scope.map.author[i];
                total += order.orderTotal;
            }
            $scope.ordersTotal = total;
        }
    }

    $scope.setOrder = function (orderby) {
        if (orderby === $scope.orderby)
        {
            $scope.reverse = !$scope.reverse;
        }
        $scope.orderby = orderby;
    };

});

app.controller('mapController', function ($scope) {

});
