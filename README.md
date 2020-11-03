# Interactive Optimizer for Generating Electro-Physiological Sensors

This Interactive Optimizer generates sensor encapsulating electrodes which can sense EMG (Electromyogram), EDA (Electro-Dermal Activity) and
ECG (Electrocardiogram) signals.

## Instructions for Use
- The tool needs absolute physical dimensions for generating sensors that are tailored for individual body dimensions. Hence the canvas has been designed keeping in mind the absolute human forearm dimensions.

- The browser window needs to be set to around 50-75% zoom levels to ensure that all the panels and the SVG canvas are appropriately rendered without overlaps.

- To run the interactive optimizer, firstly extract/pull the contents to a folder of your choice.
Then run a local HTTPServer  in a language of your choice (either through Python or node.js).
Open the file through the localhost on a browser of your choice.

- The results of the Optimizer are presented visually on the main SVG canvas. However, if more details are required, the detailed results of the layout with quality for individual muscles is printed on the console which can be accessed through the "Developer Tools" of browsers.

- Importing existing design files: To import an existing design which is JSOn formatted, firstly he toggles for the modalities need to be set. For example, if a design consisting of EMG, EDA and ECG modalities needs to be imported, then all the three toggles need to be enabled. Once the toggles are enabled, the "Upload Design" button can clicked to load an existing design file.

- Number of Iterations: A larger number of iterations can be enabled by decreasing the value of "Cooling Factor" in the 
Annealing Parameters section.
However, it has to be noted that a large number of runs can have an impact on the time required to generate the result, which can in
turn put a heavy load on the browser making the page unresponsive. On a standard laptop computer without dedicated high-end graphics hardware,
we successfully tested cooling factors in range [0.15 - 0.50] which resulted in upto ~50,000 iterations. A larger number of iterations can be possible
on more computationally powerful machines. We recommend to choose the cooling factor wisely based on the required application.

## Sample Walkthrough
For creating an optimized sensor, the following steps need to followed:
- **Capturing and Generating the Approximate 2D Surface of the body location**: Firstly, the dimensions of the forearm need to be provided. The measurement guides are available in the "Measurements Reference" panel. The measurements are based on the anatomical landmarks prescribed in the literature, however to abstract this low-level information, we provide a general higher-level illustration which helps in obtaining the measurements. After providing the dimensions, the "Create Forearm" button in "Inputs" panel should be clicked to create an approximated 2D surface of the forearm. Once the 2D surface is generated, the system automatically calculates all the "keypoints" with respect to each of the modalities.

- **Input required modalities**: Once the 2D surface is created, the desired modalities need to be chosen. Individual modalities are enabled/disabled through each of the toggle buttons in the "Inputs" section.
     
-  **Choosing the Individual Muscles**: Once the EMG modality is selected, the interface enables selecting the intended muscle to track on the forearm. Individual muscles can be toggled on/off by clicking on the respective muscle in the "Muscle Selection" area of the tool.

    
- **Sketching the Desired Shape of the Sensor**: Once the muscles are selected, the desired shape of the sensor can be indicated by sketching over the canvas area.

- **Setting the Weights**: Once the shape has been indicated, the weights to indicate the trade-off between the modalities need to be entered. 
The optimization weights can be provided through the sliders present in the "Optimization Weights" panel.


- **Generating the Sensor Layout**: Once the weights are set, click "Generate Electrodes" button to 
create the sensor. If an input shape is provided, then click the "Generate For Shape" button to 
create the layout within a given input shape which has been sketched However, if the shape has not
 been specified, then the optimizer generates a layout that is commensurate with the input from the "Area Weight" slider. 
 With higher value of the "Area Weight" slider, more priority is given to shrink the sensor size. 
 Once the sensor layout is generated, it can be exported as an SVG file or downloaded as a design file 
 which is JSON formatted. The buttons for both these functionalities can be found in the 
  "Shape Customization" panel.