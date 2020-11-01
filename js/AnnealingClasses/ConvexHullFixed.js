var ConvexHullFixed = ( function(){

    function computeConvexHull(points){
        var coordsArray = new Array();

        for(var i = 0 ; i < electrodeSet.length; i++){
            coordsArray.push(createVector(electrodeSet[i].x, electrodeSet[i].y));
        }

        /*points.push(createVector(158, 118));
        points.push(createVector(156, 135));
        points.push(createVector(161, 154));
        points.push(createVector(181, 191));
        points.push(createVector(136, 140));
        points.push(createVector(136, 107));
        points.push(createVector(136, 124));
        points.push(createVector(169, 173));*/

        hull = convexHull(coordsArray);

        return hull;
    }
    // https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain
    function convexHull(points) {
        points.sort(comparison);
        var L = [];
        for (var i = 0; i < points.length; i++) {
            while (L.length >= 2 && cross(L[L.length - 2], L[L.length - 1], points[i]) <= 0) {
                L.pop();
            }
            L.push(points[i]);
        }
        var U = [];
        for (var i = points.length - 1; i >= 0; i--) {
            while (U.length >= 2 && cross(U[U.length - 2], U[U.length - 1], points[i]) <= 0) {
                U.pop();
            }
            U.push(points[i]);
        }
        L.pop();
        U.pop();
        return L.concat(U);
    }

    function comparison(a, b) {
        return a.x == b.x ? a.y - b.y : a.x - b.x;
    }

    function cross(a, b, o) {
        return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
    }

    return {
        GetConvexHull: function(points) {
            var hull_points =  computeConvexHull(points);
            return hull_points;
        }
    };
})();