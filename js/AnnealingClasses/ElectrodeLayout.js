var ElectrodeLayout = ( function(){
    var OVERLAP_DISTANCE_THRESHOLD = 15;

    function getElectrodeSetCoordinates(electrodeSet){
        var coordsArray = new Array();

        for(var i = 0 ; i < electrodeSet.length; i++){
            coordsArray.push([electrodeSet[i].x, electrodeSet[i].y]);
        }
        return coordsArray;
    }

    function _getConvexHullForElectrodes(electrodeSet){

        var hull_points = ConvexHullCalculator.GetConvexHull(getElectrodeSetCoordinates(electrodeSet));
        return hull_points;
    }

    function acceptNeighbour(newElectrodeSet){
        var JSONStringObject = JSON.stringify(newElectrodeSet);
        return JSON.parse(JSONStringObject);
    }


    return {
        GetElectrodePoints: function(electrodeSet){
            return getElectrodeSetCoordinates(electrodeSet);
        },
        GetConvexHull: function (electrodeSet){
            var hull_points = _getConvexHullForElectrodes(electrodeSet);
            return hull_points;
        },

        AcceptNeighbour: function(newElectrodeSet){
            return acceptNeighbour(newElectrodeSet);
        }

    };




})();