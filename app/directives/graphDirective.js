function draw_graph (data) {
  // call render engine 
  // visulize data
}


// Directives
// ==========
// Here we are using dependency injection, so we can
// use the graphDataFactory to get data from server.
app.directive('connectedGraph', ['graphDataFactory', function(graphDataFactory) {
  return {
    template: "<div><div id='graph1'></div>Connected-Graph</div>",
    // we use compile fn, because it is executed once.
    compile: function(element, attrs, transclude) {
      
      // I temporarily get an undefined error....
      // I can't pass the WikiF obj from the factory to the directive


      console.log ('directive1', graphDataFactory.get_graph_data_real())
      // getting data from factory, and passing to draw graph fn
      
      var data = graphDataFactory.get_graph_data().
        then(function(data) {
          console.log('directive ',data);
          draw_graph(data);
        });
      
      
      
      



      
      


    }
  }
}]);
