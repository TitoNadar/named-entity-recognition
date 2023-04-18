import seqtag_keras
from seqtag_keras.utils import download 
from seqtag_keras.utils import load_conll
from flask import Flask, request
import json

weights = "pretrained_model\weights.h5"
params = "pretrained_model\params.json"
preprocessor = "pretrained_model\preprocessor.json"
model = None

app = Flask(__name__)
@app.route('/bilstm_crf', methods=['POST'])
def bilstm_crf_api():
    result = []
    text = request.json['text']
    output = model.analyze(text)
    
    for entity in output['entities']:
        result.append({"entity":entity['type'], "text":entity['text']})

    output_json = json.dumps(result)
    return output_json, 200, {'Content-Type': 'application/json'}


if __name__ == '__main__':
    model = seqtag_keras.Sequence.load(weights, params, preprocessor)
    app.run(threaded=False)