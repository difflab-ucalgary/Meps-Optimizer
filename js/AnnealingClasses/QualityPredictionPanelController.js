var QualityPredictionPanelController = ( function(){
    var emg_quality_bar, eda_quality_bar, ecg_quality_bar, overall_quality_bar;
    var brachioradialis_muscle, fcr_muscle, pq_muscle, pl_muscle, fcu_muscle;
    var br_muscle_selected = false, fcr_muscle_selected = false, pl_selected = false, pq_selected = false , fcu_selected = false;
    var g, quality_status;

    var ecg_status_heart, eda_status_skin;

    function init(){
        g = main_canvas.group();
        quality_status= Snap.load("./resources/status_svg_v6.svg", function (loadedFragment){
            g.append( loadedFragment );
            var myMatrix = new Snap.Matrix();
            myMatrix.translate(0,270);
            myMatrix.scale(0.32);

            g.attr({transform: myMatrix});
            //
            // brachioradialis_muscle = loadedFragment.select('#Brachiordialis_copy *');
            // fcr_muscle = loadedFragment.select('#fcr_muscle *');
            // pl_muscle = loadedFragment.select('#palmaris_longus *');
            // pq_muscle = loadedFragment.select('#pronator_quadratus');
            // fcu_muscle = loadedFragment.select('#fcu_muscle');
            //
            // ecg_status_heart = g.selectAll('#ecg_heart_status *').attr({ stroke: '#2b9e1f', fill: '#2b9e1f', opacity:0.75});
            // g.selectAll('#fcr_muscle *').attr({ stroke: '#9e0e0e', opacity:0.75 });
            // g.selectAll('#fcu_muscle *').attr({ stroke: '#9e0e0e', opacity:0.75 });
            // g.selectAll('#Brachiordialis_copy *').attr({ stroke: '#9e0e0e', opacity:0.75 });
            // g.selectAll('#pronator_quadratus *').attr({ stroke:'#9e0e0e', fill: '#9e0e0e', opacity:0.75 });
            // g.selectAll('#palmaris_longus *').attr({ stroke: '#9e0e0e', opacity:0.75 });
            // eda_status_skin = g.selectAll('#eda_status *').attr({ stroke: '#2b9e1f', fill: '#2b9e1f', opacity:0.75});

            // var emg_quality_percentage = g.selectAll('#emg_quality_percentage *');
            // emg_quality_percentage.attr({text:50+"%"});
            //
            // emg_quality_bar = g.select('#emg_quality_bar_2_ *');
            // var emg_quality_bar_width = emg_quality_bar.getBBox().width *  (1 - 0.5);
            // emg_quality_bar.attr({width:emg_quality_bar_width});
            //
            // var ecg_quality_percentage = g.selectAll('#ecg_quality_percentage *');
            // ecg_quality_percentage.attr({text:50+"%"});
            //
            // ecg_quality_bar = g.selectAll('#ecg_quality_bar *');
            // var ecg_quality_bar_width = emg_quality_bar.getBBox().width *  (1 - 0.5);
            // ecg_quality_bar.attr({width:ecg_quality_bar_width});




            main_canvas.append( g );

        });

    }
    
    function updateQualityStatus() {
        quality_status= Snap.load("./resources/status_svg_v6.svg", function (loadedFragment){

            g.clear();
            g.append( loadedFragment );


            var myMatrix = new Snap.Matrix();
            myMatrix.translate(0,270);
            myMatrix.scale(0.32);

            g.attr({transform: myMatrix});
            g.selectAll('#ecg_heart_status *').attr({ stroke: '#2b9e1f', fill: '#2b9e1f', opacity:0.75});
            g.selectAll('#eda_status *').attr({ stroke: '#2b9e1f', fill: '#2b9e1f', opacity:0.75});
            g.selectAll('#fcr_muscle *').attr({ stroke: '#9e0e0e', opacity:0.75 });


            var emg_quality_percentage = g.select('#emg_quality_percentage');
            emg_quality_percentage.attr({text:50+"%"});

            emg_quality_bar = g.select('#emg_quality_bar');
            var emg_quality_bar_width = emg_quality_bar.getBBox().width *  (1 - 0.5);
            emg_quality_bar.attr({width:emg_quality_bar_width});

            var ecg_quality_percentage = g.select('#ecg_quality_percentage');
            ecg_quality_percentage.attr({text:50+"%"});

            ecg_quality_bar = g.select('#ecg_quality_bar');
            var ecg_quality_bar_width = ecg_quality_bar.getBBox().width *  (1 - 0.5);
            ecg_quality_bar.attr({width:ecg_quality_bar_width});

            overall_quality_bar = g.select('#overall_quality_bar');
            var overall_quality_bar_width = overall_quality_bar.getBBox().width *  (1 - 0.5);
            overall_quality_bar.attr({width:overall_quality_bar_width});

            var area_text_block = g.select('#area_text');
            area_text_block.attr({text:123.45+""});




            main_canvas.append( g );

        });


    }

    return{
        InitStatus: function(){
            console.log("Init called");
            init();
            return;
        },
        UpdateQualityStatus: function(){
            updateQualityStatus();
        }
    }


})();