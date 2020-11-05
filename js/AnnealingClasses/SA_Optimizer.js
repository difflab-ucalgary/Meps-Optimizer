/*
 * Copyright (c) 2020.
 *
 *  MIT License
 *
 *  Copyright (c) 2020 Aditya Nittala
 *  Affiliation: Saarland University, Germany
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

/*
    Class: Simulated Annealing Optimizer (SA_Optimizer).
    This function handles the optimization of the layout.
*/

var SA_Optimizer = (function () {

    var coolingFactor            = 0.0,
        stabilizingFactor        = 0.0,
        freezingTemperature      = 0.0,
        currentSystemEnergy      = 0.0,
        currentSystemTemperature = 0.0,
        currentStabilizer        = 0.0,


        generateNewSolution      = null,
        generateNeighbor         = null,
        acceptNeighbor           = null;
    var currentElectrodeSet = new Array();
    var newElectrodeLayout;
    var hull_points = new Array(), hull_area;
    var lowestElectrodeSet = new Array();
    var lowestEnergy;
    var startingStep = true;
    var totalSolutions = 0;
    var acceptedSolutions = 0;

    function _init (options, electrodeSet, forearmTrapezoidPoints, weights, main_canvas) {
        coolingFactor            = options.coolingFactor;
        stabilizingFactor        = options.stabilizingFactor;
        freezingTemperature      = options.freezingTemperature;
        generateNewSolution      = options.generateNewSolution;
        generateNeighbor         = options.generateNeighbor;
        acceptNeighbor           = options.acceptNeighbor;

        currentSystemEnergy      = EnergyCalculator.GetSystemEnergyForArea(electrodeSet, forearmTrapezoidPoints, weights, main_canvas);
        currentSystemTemperature = options.initialTemperature;
        currentStabilizer        = options.initialStabilizer;
    }

    function _probabilityFunction (temperature, delta) {
        if (delta < 0) {
            return true;
        }

        var C = Math.exp(-(delta * 1000) / temperature);
        var R = Math.random();

        if (R < C) {
            return true;
        }

        return false;
    }

    function optimizeLayout(options, electrodeSet, forearmTrapezoidpoints, weights, input_shape_coords, input_shape_svg, main_canvas) {
        currentElectrodeSet = ElectrodeLayout.AcceptNeighbour(electrodeSet);

        if(startingStep == true){
            lowestEnergy = currentSystemEnergy;
            startingStep = false;
        }

        while(currentSystemTemperature > coolingFactor){
            if (currentSystemTemperature > freezingTemperature){
                for (var i = 0; i < currentStabilizer; i++){
                    totalSolutions++;

                    // if(totalSolutions >= 15489){
                    //     console.log("Debug log");
                    // }

                    newElectrodeLayout = ElectrodeLayoutGenerator.GenerateNeighbourLayout(forearmTrapezoidpoints, currentElectrodeSet, input_shape_coords, input_shape_svg);
                    var newEnergy = EnergyCalculator.GetSystemEnergyForArea(newElectrodeLayout, forearmTrapezoidPoints, weights, main_canvas);

                    if(newEnergy < lowestEnergy){
                        lowestEnergy = newEnergy;
                        lowestElectrodeSet = ElectrodeLayoutGenerator.AcceptNeighbour(newElectrodeLayout);
                        acceptedSolutions++;
                    }

                    var energyDelta = newEnergy - currentSystemEnergy;

                    if (_probabilityFunction(currentSystemTemperature, energyDelta)) {
                        currentElectrodeSet = ElectrodeLayoutGenerator.AcceptNeighbour(newElectrodeLayout);
                        currentSystemEnergy = newEnergy;
                        acceptedSolutions++;
                    }
                }
                currentSystemTemperature = currentSystemTemperature - coolingFactor;
                currentStabilizer = currentStabilizer * stabilizingFactor;

                // return false;
            }
        }

        currentSystemTemperature = freezingTemperature;
        console.log("Total Solutions:" + totalSolutions);
        console.log("Accepted Solutions:" + acceptedSolutions);
        console.log("Acceptance Ration:" + acceptedSolutions/totalSolutions);
        return lowestElectrodeSet;

    }

    function optimizeLayoutForArea(options, electrodeSet, forearmTrapezoidpoints, weights, input_shape_coords, input_shape_svg, area, main_canvas) {
        currentElectrodeSet = ElectrodeLayout.AcceptNeighbour(electrodeSet);

        if(startingStep == true){
            lowestEnergy = currentSystemEnergy;
            startingStep = false;
        }

        while(currentSystemTemperature > coolingFactor){
            if (currentSystemTemperature > freezingTemperature){
                for (var i = 0; i < currentStabilizer; i++){
                    totalSolutions++;
                    if(totalSolutions >= 15489){
                        console.log("Debug log");
                    }

                    newElectrodeLayout = ElectrodeLayoutGenerator.GenerateNeighbourLayout(forearmTrapezoidpoints, currentElectrodeSet, input_shape_coords, input_shape_svg);
                    var newEnergy = EnergyCalculator.GetSystemEnergyForArea(newElectrodeLayout, forearmTrapezoidPoints, weights, area, main_canvas);

                    if(newEnergy < lowestEnergy){
                        lowestEnergy = newEnergy;
                        lowestElectrodeSet = ElectrodeLayoutGenerator.AcceptNeighbour(newElectrodeLayout);
                        acceptedSolutions++;
                    }

                    var energyDelta = newEnergy - currentSystemEnergy;

                    if (_probabilityFunction(currentSystemTemperature, energyDelta)) {
                        currentElectrodeSet = ElectrodeLayoutGenerator.AcceptNeighbour(newElectrodeLayout);
                        currentSystemEnergy = newEnergy;
                        acceptedSolutions++;
                    }
                }
                currentSystemTemperature = currentSystemTemperature - coolingFactor;
                currentStabilizer = currentStabilizer * stabilizingFactor;

                // return false;
            }
        }

        currentSystemTemperature = freezingTemperature;
        console.log("Total Solutions:" + totalSolutions);
        console.log("Accepted Solutions:" + acceptedSolutions);
        console.log("Acceptance Ration:" + acceptedSolutions/totalSolutions);
        return lowestElectrodeSet;

    }

    function getOptions () {
        return {
            initialTemperature:  parseFloat(document.getElementById('initial_temperature').value),
            initialStabilizer:   parseFloat(document.getElementById('initial_stabilizer').value),
            coolingFactor:       parseFloat(document.getElementById('cooling_factor').value),
            stabilizingFactor:   parseFloat(document.getElementById('stabilizing_factor').value),
            freezingTemperature: parseFloat(document.getElementById('freezing_temperature').value)
        };
    }

    return {
        Initialize: function (options, electrodeSet, forearmTrapezoidPoints, weights, main_canvas) {
            _init(options, electrodeSet, forearmTrapezoidPoints, weights, main_canvas);
        },

        OptimizeElectrodeLayout: function(options, electrodeSet, forearmTrapezoidpoints, weights, input_shape_coords, input_shape_svg, main_canvas ){
            return optimizeLayout(options, electrodeSet, forearmTrapezoidpoints, weights, input_shape_coords, input_shape_svg, main_canvas);

        },
        GetOptions: function(){
            return getOptions();
        },
        OptimizeElectrodeLayoutForArea: function(options, electrodeSet, forearmTrapezoidpoints, weights, input_shape_coords, input_shape_svg, area, main_canvas ){
            return optimizeLayoutForArea(options, electrodeSet, forearmTrapezoidpoints, weights, input_shape_coords, input_shape_svg, area, main_canvas);

        }

    };




})();