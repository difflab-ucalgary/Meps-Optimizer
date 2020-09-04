var ElectrodeLayoutModifier = ( function(){

    function updateElectrodeLayoutFields(electrodeSet){
        for(var i = 0 ; i < electrodeSet.length; i++){
            if(electrodeSet[i].type == "emg"){
                switch (electrodeSet[i].id){
                    case "FCR1":    document.getElementById("fcr_electrode_1_x").value = electrodeSet[i].x;
                        document.getElementById("fcr_electrode_1_y").value = electrodeSet[i].y;
                        break;

                    case "FCR2":    document.getElementById("fcr_electrode_2_x").value = electrodeSet[i].x;
                        document.getElementById("fcr_electrode_2_y").value = electrodeSet[i].y;
                        break;

                    case "BR1":     document.getElementById("br_electrode_1_x").value = electrodeSet[i].x;
                        document.getElementById("br_electrode_1_y").value = electrodeSet[i].y;
                        break;

                    case "BR2":     document.getElementById("br_electrode_2_x").value = electrodeSet[i].x;
                        document.getElementById("br_electrode_2_y").value = electrodeSet[i].y;
                        break;

                    case "PL1":     document.getElementById("pl_electrode_1_x").value = electrodeSet[i].x;
                        document.getElementById("pl_electrode_1_y").value = electrodeSet[i].y;
                        break;

                    case "PL2":     document.getElementById("pl_electrode_2_x").value = electrodeSet[i].x;
                        document.getElementById("pl_electrode_2_y").value = electrodeSet[i].y;
                        break;

                    case "PQ1":     document.getElementById("pq_electrode_1_x").value = electrodeSet[i].x;
                        document.getElementById("pq_electrode_1_y").value = electrodeSet[i].y;
                        break;

                    case "PQ2":     document.getElementById("pq_electrode_2_x").value = electrodeSet[i].x;
                        document.getElementById("pq_electrode_2_y").value = electrodeSet[i].y;
                        break;

                    case "FCU1":     document.getElementById("fcu_electrode_1_x").value = electrodeSet[i].x;
                        document.getElementById("fcu_electrode_1_y").value = electrodeSet[i].y;
                        break;

                    case "FCU2":     document.getElementById("fcu_electrode_2_x").value = electrodeSet[i].x;
                        document.getElementById("fcu_electrode_2_y").value = electrodeSet[i].y;
                        break;
                }

            }else if(electrodeSet[i].type == "ecg"){
                document.getElementById("ecg_electrode_1_x").value = electrodeSet[i].x;
                document.getElementById("ecg_electrode_1_y").value = electrodeSet[i].y;

                document.getElementById("ecg_electrode_2_x").value = electrodeSet[i + 1].x;
                document.getElementById("ecg_electrode_2_y").value = electrodeSet[i + 1].y;
                i++;
            }else if(electrodeSet[i].type =="eda"){
                document.getElementById("eda_electrode_1_x").value = electrodeSet[i].x;
                document.getElementById("eda_electrode_1_y").value = electrodeSet[i].y;

                document.getElementById("eda_electrode_2_x").value = electrodeSet[i + 1].x;
                document.getElementById("eda_electrode_2_y").value = electrodeSet[i + 1].y;

                i++;
            }
        }

    }

    function updateEMGKeyPoints(keyPointSet){
        for(var i = 0 ; i < keyPointSet.length; i++){
            if(keyPointSet[i].id == "br1"){
                document.getElementById("br_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("br_keypoint_1_y").value = keyPointSet[i].y;
            }
            if(keyPointSet[i].id == "br2"){
                document.getElementById("br_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("br_keypoint_2_y").value = keyPointSet[i].y;
            }
            if(keyPointSet[i].id == "fcr1"){
                document.getElementById("fcr_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("fcr_keypoint_1_y").value = keyPointSet[i].y;
            }
            if(keyPointSet[i].id == "fcr2"){
                document.getElementById("fcr_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("fcr_keypoint_2_y").value = keyPointSet[i].y;
            }


        }
    }

    function updateElectrodeLayout(electrodeSet){
        for (var i = 0; i < electrodeSet.length; i++) {
            if (electrodeSet[i].type == "emg") {
                switch (electrodeSet[i].id) {
                    case "FCR1":
                        electrodeSet[i].x = document.getElementById("fcr_electrode_1_x").value;
                        electrodeSet[i].y = document.getElementById("fcr_electrode_1_y").value;
                        break;

                    case "FCR2":
                        electrodeSet[i].x = document.getElementById("fcr_electrode_2_x").value;
                        electrodeSet[i].y = document.getElementById("fcr_electrode_2_y").value;
                        break;

                    case "BR1":
                        electrodeSet[i].x = document.getElementById("br_electrode_1_x").value;
                        electrodeSet[i].y = document.getElementById("br_electrode_1_y").value;
                        break;

                    case "BR2":
                        electrodeSet[i].x = document.getElementById("br_electrode_2_x").value;
                        electrodeSet[i].y = document.getElementById("br_electrode_2_y").value;
                        break;

                    case "PL1":
                        electrodeSet[i].x = document.getElementById("pl_electrode_1_x").value;
                        electrodeSet[i].y = document.getElementById("pl_electrode_1_y").value;
                        break;

                    case "PL2":
                        electrodeSet[i].x = document.getElementById("pl_electrode_2_x").value;
                        electrodeSet[i].y = document.getElementById("pl_electrode_2_y").value;
                        break;

                    case "PQ1":
                        electrodeSet[i].x = document.getElementById("pq_electrode_1_x").value;
                        electrodeSet[i].y = document.getElementById("pq_electrode_1_y").value;
                        break;

                    case "PQ2":
                        electrodeSet[i].x = document.getElementById("pq_electrode_2_x").value;
                        electrodeSet[i].y = document.getElementById("pq_electrode_2_y").value;
                        break;

                    case "FCU1":
                        electrodeSet[i].x = document.getElementById("fcu_electrode_1_x").value;
                        electrodeSet[i].y = document.getElementById("fcu_electrode_1_y").value;
                        break;

                    case "FCU2":
                        electrodeSet[i].x = document.getElementById("fcu_electrode_2_x").value;
                        electrodeSet[i].y = document.getElementById("fcu_electrode_2_y").value;
                        break;
                }
            }else if(electrodeSet[i].type == "ecg"){
                electrodeSet[i].x = document.getElementById("ecg_electrode_1_x").value;
                electrodeSet[i].y = document.getElementById("ecg_electrode_1_y").value;

                electrodeSet[i + 1].x = document.getElementById("ecg_electrode_2_x").value;
                electrodeSet[i + 1].y = document.getElementById("ecg_electrode_2_y").value;

                i++;
            }else if(electrodeSet[i].type =="eda"){
                electrodeSet[i].x = document.getElementById("eda_electrode_1_x").value ;
                electrodeSet[i].y = document.getElementById("eda_electrode_1_y").value;

                electrodeSet[i + 1].x = document.getElementById("eda_electrode_2_x").value;
                electrodeSet[i + 1].y = document.getElementById("eda_electrode_2_y").value;

                i++;
            }
        }
        return electrodeSet;
    }








    return {
        UpdateElectrodeLayoutFields: function(electrodeSet) {
            updateElectrodeLayoutFields(electrodeSet);
            return;
        },
        UpdateElectrodeLayout: function(electrodeSet){
            return updateElectrodeLayout(electrodeSet);
        },
        SetKeyboardTriggerForTextFields: function(electrodeSet){
            return setKeyboardTriggerForTextFields(electrodeSet);
        }
    };

})();













