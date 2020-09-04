var SensorControls = (function () {

    var weights = new Array();
    weights[0] = weights[1] = weights[2] = weights[3] = 0;
    function getWeights() {
        // var emg_weight = parseFloat(document.getElementById("emg_weight_slider").value);
        // var eda_weight = parseFloat(document.getElementById("eda_weight_slider").value);
        // var ecg_weight = parseFloat(document.getElementById("ecg_weight_slider").value);
        //
        var emg_weight = parseInt(document.getElementById("emg_channels_knob").value);
        var eda_weight = parseInt(document.getElementById("eda_channels_knob").value);
        var ecg_weight = parseInt(document.getElementById("ecg_channels_knob").value);
        var area_weight = parseInt(document.getElementById("area_weight_slider").value);

        return [emg_weight,eda_weight,ecg_weight,area_weight ]
    }

    function  getDefaultWeights() {
        return [0.2, 0.5, 0.3, 0.5];
    }

    function getSensorChannels() {
        var numEMGChannels = parseInt(document.getElementById("emg_channels").value);
        var numEDAChannels = parseInt(document.getElementById("eda_channels").value);
        var numECGChannels = parseInt(document.getElementById("ecg_channels").value);

        return[numEMGChannels, numEDAChannels, numECGChannels ]

    }

    function getNormalizedWeights() {
        return [1 - (weights[0]/100), 1 - (weights[1]/100), 1 - (weights[2]/100), 1 - (weights[3]/100)];
    }

    function getNormalizedAreaWeight(){
        return 1- weights[3]/100;
    }

    function getWeights(){
        return weights;

    }

    function setWeights(a, b, c, d){

        weights[0] = a;
        weights[1] = b;
        weights[2] = c;
        weights[3] = d;

        return weights;
    }

    function setWeightEMG(a){

        weights[0] = a/100;

        return weights;
    }

    function setWeightEDA(a){

        weights[1] = a/100;

        return weights;
    }

    function setWeightECG(a){


        weights[2] = a/100;

        return weights;
    }

    function setWeightArea(a){


        weights[3] = a/100;

        return weights;
    }

    function calculateTotalNumberOfElectrodes(){
        var sensorChannels = getSensorChannels();

        var numEMGElectrodes = sensorChannels[0] * 2;
        var numEDAElectrodes = sensorChannels[1] * 2;
        var numECGElectrodes = sensorChannels[2] * 1;

        var numReferenceElectrodes = sensorChannels[0] + sensorChannels[2];

        return [numEMGElectrodes + numEDAElectrodes + numECGElectrodes ];
    }

    function calculateNumEMGElectrodes(){
        var sensorChannels = getSensorChannels();

        return sensorChannels[0] * 2;
    }

    function calculateNumEDAElectrodes() {
        var sensorChannels = getSensorChannels();
        return sensorChannels[1] * 2;
    }

    function calculateNumECGElectrodes() {
        var sensorChannels = getSensorChannels();

        return sensorChannels[2] * 1;

    }

    function calculateNumReferenceElectrodes(){
        var sensorChannels = getSensorChannels();
        var numReferenceElectrodes = sensorChannels[0] + sensorChannels[2];

        return numReferenceElectrodes;
    }

    return{
        GetSensorChannels: function () {
            return getSensorChannels();

        },

        CalculateTotalNumberOfElectrodes: function () {
            return calculateTotalNumberOfElectrodes();
        },

        CalculateNumEMGElectrodes: function () {
            return calculateNumEMGElectrodes();

        },

        CalculateNumEDAElectrodes: function () {
            return calculateNumEDAElectrodes();

        },

        CalculateNumECGElectrodes: function () {
            return calculateNumECGElectrodes();

        },

        CalculateNumReferenceElectrodes: function () {
            return   calculateNumReferenceElectrodes();
        },

        GetWeights: function () {
            return getWeights();

        },
        GetWeights: function () {
            return getWeights();
        },
        SetWeights: function (a, b, c, d) {
            return setWeights(a, b, c, d);

        },
        SetWeightEMG: function (a) {
            return setWeightEMG(a);

        },
        SetWeightEDA: function (a) {
            return setWeightEDA(a);

        },
        SetWeightECG: function (a) {
            return setWeightECG(a);

        },
        SetWeightArea: function (a) {
            return setWeightArea(a);
        },

        GetDefaultWeights: function(){
            return getDefaultWeights();
        },

        GetNormalizedWeights: function(){
            return getNormalizedWeights();
        },

        GetNormalizedAreaWeight: function(){

        }

    }
})();