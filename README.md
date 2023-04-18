#  **Named Entity Recognition and Classification**
This project is a web-based application that uses four different algorithms (ACE, Flair, BERT + CRF, and BiLSTM + CRF) for named entity recognition and classification. The application provides users with a simple interface for entering text and obtaining information about the named entities in that text.

###  **Getting Started**
To use the application, you will need to install the required dependencies and start the local server. Follow these steps:

Install Python 3.x on your computer if you haven't already.
1.Clone this repository to your local machine.
Install the required Python packages by running pip install -r requirements.txt.
Start the Flask server by running python app.py.
Open your web browser and navigate to http://localhost:5000.
Usage

### **Usage**
Once you have the application up and running, you can enter text in the input field and click the "Submit" button to obtain information about the named entities in the text. The application will display the recognized named entities along with their types (e.g., person, location, organization) and the algorithm that was used to identify them.

### **Algorithms**
The application uses four different algorithms for named entity recognition and classification:

1) ACE: A rule-based algorithm that uses handcrafted patterns to identify named entities.
2) Flair: A deep learning algorithm that uses contextualized word embeddings to identify named entities.
3) BERT + CRF: A combination of the BERT language model and a conditional random field (CRF) for named entity recognition.
4) BiLSTM + CRF: A combination of a bidirectional LSTM neural network and a CRF for named entity recognition.

### **FrontEnd**
The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. The interface is designed to be simple and intuitive, with a clean and modern look.

### **Contributing**
We welcome contributions from the community. If you would like to contribute to the project, please follow these steps:

-Item1 Fork the repository and create a new branch for your changes.
-Item2 Make your changes and submit a pull request.
_Item3 We will review your changes and merge them if they are a good fit for the project.

### **Acknowledgements**
We would like to thank the creators of the CoNLL-2003 dataset for providing the data that we used to train and evaluate our algorithms. We would also like to thank the developers of the ACE, Flair, and CRF++ libraries for their contributions to the field of natural language processing.
