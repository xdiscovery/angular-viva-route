// Factories
// =========
app.factory('graphDataFactory', ['$http', function($http) {
  // this factory, will fetch graph data from server
  var factory = {};
  // this is just mock data
  factory.get_graph_data = function() {
     

     
    // Wiki part for version alpha
      // NORMALIZE JSON (still it won't get the UNICODE stuff.. darn... extend with else)

        for (id in json.atlas){ 
            for (name in nodesN) {
             if (nodesN[name].toLowerCase() == json.atlas[id].source) {
                json.atlas[id].source = nodesN[name]
             }
             if (nodesN[name].toLowerCase() == json.atlas[id].target) {
                json.atlas[id].target = nodesN[name]
             }
           }
        }

        // MAKE a continous query against wiki api

        // see: https://gist.github.com/Steren/704540
        var queryContinue = '';
        var keepQ;
        var tmpData = [];
        var res=[];
        var resQ=[];
       

        var wikipediaHTMLResult = function(data) {
            page = data.query.pages;
            for (var id in page) {

                // Normalize page[id] properties
                if (!page[id].hasOwnProperty['thumbnail']) {
                    _.defaults(page[id], {thumbnail : {source: "http://create-games.com/cache/thumbnail.php?url&#61;http%3A//i929.photobucket.com/albums/ad134/SavannahZCar/gHunter.jpg", height: 80, width: 100}});
                }
                res.push(page[id])
            }
            if (data.hasOwnProperty('continue')) {
                queryContinue = data.continue.picontinue;
                keepQ = true;
                return callWikipediaAPI(thepage,numberArticle,queryContinue);
                console.log('keepQ after callback',keepQ, 'queryContinue ', queryContinue)     
            } else {
                queryContinue = '';
                keepQ = false;  
            }
        };
         
  
        var thepage = 'Id Software|Doom 3|Wolfenstein 3D|Quake II|John D. Carmack|John Romero|Doom (video game)|Quake (video game)|Commander Keen|Rage (video game)';

        var numberArticle = thepage.split('|').length;

      
      
      var callWikipediaAPI = function(wikipediaPage,numberArticle,continueQ) {
        return $http.jsonp('http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK', {
        params: {
          action: 'query',
          format: 'json',
          titles: wikipediaPage,
          prop:'pageimages',
          pithumbsize:'100',
          pilimit:numberArticle,
          continue: '',
          picontinue:continueQ
        }
        }).then(function ( response ) {
          console.log('Wikip',response.data);
          wikipediaHTMLResult(response.data);

        });

      }


      // AN ERROR... how to pass the Wikip object to the directive!!?


      return callWikipediaAPI(listN,numberArticle,queryContinue)
      

      console.log('dataF',dataFormatted)
      return dataFormatted

      }
  // example how would you call server for data
  factory.get_graph_data_real = function() {
   
    return $http.jsonp('http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK', {
    params: {
      action: 'query',
      titles: 'Albert Einstein',
      format: 'json'
    }

  }).then( function ( response ) {
    console.log(response.data)
    return response.data;


  });
  }
 
  
  return factory

  
}]);

