# Interactive Optimizer for Generating Electro-Physiological Sensors

This Interactive Optimizer generates sensor encapsulating electrodes which can sense EMG (Electromyogram), EDA (Electro-Dermal Activity) and
ECG (Electrocardiogram) signals.

## Instructions for Use
- The tool needs absolute physical dimensions for generating sensors that are tailored for individual body dimensions. Hence the canvas has been designed keeping in mind the absolute human forearm dimensions.

- The browser window needs to be set to around 50-75% zoom levels to ensure that all the panels and the SVG canvas are appropriately rendered without overlaps.

- The results of the Optimizer are presented visually on the main SVG canvas. However, if more details are required, the detailed results of the layout with quality for individual muscles is printed on the console which can be accessed through the "Developer Tools" of browsers.


## Sample Walkthrough
For creating an optimized sensor, the following steps need to followed:
- **Capturing and Generating the Approximate 2D Surface of the body location**: Firstly, the the dimensions of the forearm need to be provided. The measurement guides are available in the "Measurements Reference" panel. The measurements are based on the anatomical landmarks prescribed in literature, however to abstract this low-level information, we provide a general higher-level illustration which helps in obtaining the measurements. After providing the dimensions, "Create Forearm" button in "Inputs" panel should be clicked to create an approximated 2D surface of the forearm. Once the 2D surface is generated, the system automatically calculates all the "keypoints" with respect to each of the modalities.

- **Input required modalities**: Once the 2D surface is created, the desired modalities need to be chosen. Individual modalities, are enabled/disabled through each of the toggle buttons in the "Inputs" section.
     
-  **Choosing the Individual Muscles**: Once the EMG modality is selected, the interface enables selecting the intended muscle to track on the forearm. These individual muscles can be toggled on/off by clicking the individual muscle in the "Muscle Selection" area of the tool.
    
- **Sketching the Desired Shape of the Sensor**: Once the muscles are selected, the desired shape of the sensor can be indicated by sketching over the canvas area.

    \item \emph{}:Once the weights are set, the user selects the "Generate Electrodes" button to create the sensor with the electrodes laid out accordingly. If the user has specified the desired shape of the sensor, then the electrodes a laid out within the shape. However, if the shape has not been specified, then the optimizer, generate a layout that is commensurate with the input from the "Area Weight" slider. A higher are weight indicate a larger size while a lower weight indicates a smaller size. 
    If the user wants to generate another layout, he can click the "Reset" button, re-adjust his weights and generate a new layout. The granularity of the desired result can be chosen by adjusting the parameters in the "Annealing Parameters" interface.
    
    \item \emph{Exporting and Fabrication}: Once the sensor layout is generated, it can be exported as an SVG file. The exported SVG file contains the alignment markers which the users can utilize for aligning the generated sensor layout with the body location. To support our \textit{designer-in-loop} philosophy, the user has the freedom to fine-tine or adjust the generated design using a standard vector graphics editor.


- **Setting the Weights**:Once the shape has been indicated, the weights to indicate the trade-off between the modalities needs to be entered. The optimizaiton weights can be provided in through the sliders present in the "Optimization Weights" panel.


- **Generating the Sensor Layout**: Once the weights are set, click "Generate Electrodes" button to create the sensor. If an input shape is provided, then click the "Generate For Shape" button to create the layout within a given input shape which has been sketched However, if the shape has not been specified, then the optimizer, generate a layout that is commensurate with the input from the "Area Weight" slider. Higher the value of the "Area Weight" slider, more the priority given to shrink the sensor size.