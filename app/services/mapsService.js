//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('mapsService', function () {
    this.getMaps = function () {
        return maps;
    };

    this.insertMap = function (title, about) {
        var topID = maps.length + 1;
        maps.push({
            id: topID,
            title: title,
            about: about
        });
    };

    this.deleteMap = function (id) {
        for (var i = maps.length - 1; i >= 0; i--) {
            if (maps[i].id === id) {
                maps.splice(i, 1);
                break;
            }
        }
    };

    this.getMap = function (id) {
        for (var i = 0; i < maps.length; i++) {
            if (maps[i].id === id) {
                return maps[i];
            }
        }
        return null;
    };



    var maps = [
        {
            id: 1, 
            title: 'a game',
            author: [
                {firstName: 'pippo', lastName: 'strello'}
            ],
            about: 'Description',
            map:[
                {source: "player1", target: "player2", distance: 0.40 },
                {source: "player1", target: "player3", distance: 0.70}
            ]
        },
        {
            id: 2, 
            title: 'another game',
            author: [
                {firstName: 'frantic', lastName: 'jizzy'}
            ],
            about: 'Description',
            map:[
                {source: "player1", target: "player3", distance: 0.40 },
                {source: "player3", target: "player2", distance: 0.70}
            ]
        }
    ];

});