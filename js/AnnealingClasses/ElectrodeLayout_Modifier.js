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



    function updateEMGKeyPointFields(keyPointSet){
        for(var i = 0 ; i < keyPointSet.length; i++){
            if((keyPointSet[i].id == "br1") || (keyPointSet[i].id == "BR1")){
                document.getElementById("br_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("br_keypoint_1_y").value = keyPointSet[i].y;
            }
            if((keyPointSet[i].id == "br2") || (keyPointSet[i].id == "BR2")){
                document.getElementById("br_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("br_keypoint_2_y").value = keyPointSet[i].y;
            }
            if((keyPointSet[i].id == "fcr1") || (keyPointSet[i].id == "FCR1")){
                document.getElementById("fcr_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("fcr_keypoint_1_y").value = keyPointSet[i].y;
            }
            if((keyPointSet[i].id == "fcr2") || (keyPointSet[i].id == "FCR2")){
                document.getElementById("fcr_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("fcr_keypoint_2_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "pq1") || (keyPointSet[i].id == "PQ1")){
                document.getElementById("pq_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("pq_keypoint_1_y").value = keyPointSet[i].y;
            }
            if((keyPointSet[i].id == "pq2") || (keyPointSet[i].id == "PQ2")){
                document.getElementById("pq_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("pq_keypoint_2_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "fcu1") || (keyPointSet[i].id == "FCU1")){
                document.getElementById("fcu_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("fcu_keypoint_1_y").value = keyPointSet[i].y;
            }
            if((keyPointSet[i].id == "fcu2") || (keyPointSet[i].id == "FCU2")){
                document.getElementById("fcu_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("fcu_keypoint_2_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "pl1") || (keyPointSet[i].id == "PL1")){
                document.getElementById("pl_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("pl_keypoint_1_y").value = keyPointSet[i].y;
            }
            if((keyPointSet[i].id == "pl2") || (keyPointSet[i].id == "PL2")){
                document.getElementById("pl_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("pl_keypoint_2_y").value = keyPointSet[i].y;
            }
        }
    }

    function updateEMGKeypoints(keypointSet){
        for(var i = 0 ; i < keypointSet.length; i++){

            if((keyPointSet[i].id == "br1") || (keyPointSet[i].id == "BR1")){
                keyPointSet[i].x = parseFloat(document.getElementById("br_keypoint_1_x").value);
                    keyPointSet[i].y = parseFloat(document.getElementById("br_keypoint_1_y").value);
            }
            if((keyPointSet[i].id == "br2") || (keyPointSet[i].id == "BR2")){
                keyPointSet[i].x = parseFloat(document.getElementById("br_keypoint_2_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("br_keypoint_2_y").value);
            }
            if((keyPointSet[i].id == "fcr1") || (keyPointSet[i].id == "FCR1")){
                keyPointSet[i].x = parseFloat(document.getElementById("fcr_keypoint_1_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("fcr_keypoint_1_y").value);
            }
            if((keyPointSet[i].id == "fcr2") || (keyPointSet[i].id == "FCR2")){
                keyPointSet[i].x = parseFloat(document.getElementById("fcr_keypoint_2_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("fcr_keypoint_2_y").value);
            }

            if((keyPointSet[i].id == "pq1") || (keyPointSet[i].id == "PQ1")){
                keyPointSet[i].x = parseFloat(document.getElementById("pq_keypoint_1_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("pq_keypoint_1_y").value);
            }
            if((keyPointSet[i].id == "pq2") || (keyPointSet[i].id == "PQ2")){
                keyPointSet[i].x = parseFloat(document.getElementById("pq_keypoint_2_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("pq_keypoint_2_y").value);
            }

            if((keyPointSet[i].id == "fcu1") || (keyPointSet[i].id == "FCU1")){
                keyPointSet[i].x = parseFloat(document.getElementById("fcu_keypoint_1_x").value);
                keyPointSet[i].y =  parseFloat(document.getElementById("fcu_keypoint_1_y").value);
            }
            if((keyPointSet[i].id == "fcu2") || (keyPointSet[i].id == "FCU2")){
                keyPointSet[i].x = parseFloat(document.getElementById("fcu_keypoint_2_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("fcu_keypoint_2_y").value);
            }

            if((keyPointSet[i].id == "pl1") || (keyPointSet[i].id == "PL1")){
                keyPointSet[i].x = parseFloat(document.getElementById("pl_keypoint_1_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("pl_keypoint_1_y").value);
            }
            if((keyPointSet[i].id == "pl2") || (keyPointSet[i].id == "PL2")){
                keyPointSet[i].x = parseFloat(document.getElementById("pl_keypoint_2_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("pl_keypoint_2_y").value);
            }

        }
        return keypointSet;
    }

    function updateECGKeypoints(keyPointSet){
        for(var i = 0 ; i < keyPointSet.length; i++){
            if((keyPointSet[i].id == "ecg1") || (keyPointSet[i].id == "ECG1")){
                keyPointSet[i].x = parseFloat(document.getElementById("ecg_keypoint_1_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("ecg_keypoint_1_y").value);
            }

            if((keyPointSet[i].id == "ecg2") || (keyPointSet[i].id == "ECG2")){
                keyPointSet[i].x = parseFloat(document.getElementById("ecg_keypoint_2_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("ecg_keypoint_2_y").value);
            }

            if((keyPointSet[i].id == "ecg3") || (keyPointSet[i].id == "ECG3")){
                keyPointSet[i].x = parseFloat(document.getElementById("ecg_keypoint_3_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("ecg_keypoint_3_y").value);
            }

            if((keyPointSet[i].id == "ecg4") || (keyPointSet[i].id == "ECG4")){
                keyPointSet[i].x = parseFloat(document.getElementById("ecg_keypoint_4_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("ecg_keypoint_4_y").value);
            }

            if((keyPointSet[i].id == "ecg5") || (keyPointSet[i].id == "ECG5")){
                keyPointSet[i].x = parseFloat(document.getElementById("ecg_keypoint_5_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("ecg_keypoint_5_y").value);
            }

            if((keyPointSet[i].id == "ecg6") || (keyPointSet[i].id == "ECG6")){
                keyPointSet[i].x = parseFloat(document.getElementById("ecg_keypoint_6_x").value);
                keyPointSet[i].y = parseFloat(document.getElementById("ecg_keypoint_6_y").value);
            }
        }
        return keyPointSet;
    }

    function updateECGKeypointFields(keyPointSet){
        for(var i = 0 ; i < keyPointSet.length; i++){
            if((keyPointSet[i].id == "ecg1") || (keyPointSet[i].id == "ECG1")){
                document.getElementById("ecg_keypoint_1_x").value = keyPointSet[i].x;
                document.getElementById("ecg_keypoint_1_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "ecg2") || (keyPointSet[i].id == "ECG2")){
                document.getElementById("ecg_keypoint_2_x").value = keyPointSet[i].x;
                document.getElementById("ecg_keypoint_2_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "ecg3") || (keyPointSet[i].id == "ECG3")){
                document.getElementById("ecg_keypoint_3_x").value = keyPointSet[i].x;
                document.getElementById("ecg_keypoint_3_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "ecg4") || (keyPointSet[i].id == "ECG4")){
                document.getElementById("ecg_keypoint_4_x").value = keyPointSet[i].x;
                document.getElementById("ecg_keypoint_4_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "ecg5") || (keyPointSet[i].id == "ECG5")){
                document.getElementById("ecg_keypoint_5_x").value = keyPointSet[i].x;
                document.getElementById("ecg_keypoint_5_y").value = keyPointSet[i].y;
            }

            if((keyPointSet[i].id == "ecg6") || (keyPointSet[i].id == "ECG6")){
                document.getElementById("ecg_keypoint_6_x").value = keyPointSet[i].x;
                document.getElementById("ecg_keypoint_6_y").value = keyPointSet[i].y;
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
        UpdateKeypointFields: function(keypointSet) {
            keypointSet = updateEMGKeyPointFields(keyPointSet);
            keypointSet = updateECGKeypointFields(keyPointSet);
            return keypointSet;
        },
        UpdateKeypoints: function(keypointSet){
            keypointSet = updateEMGKeypoints(keypointSet);
            keypointSet = updateECGKeypoints(keypointSet);
            return keypointSet;
        },
        SetKeyboardTriggerForTextFields: function(electrodeSet){
            return setKeyboardTriggerForTextFields(electrodeSet);
        }
    };

})();













