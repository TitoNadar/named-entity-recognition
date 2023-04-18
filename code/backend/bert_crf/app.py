from flask import Flask, request, jsonify
import torch
from transformers import AutoTokenizer, AutoModelForTokenClassification

'''
To hit the API, send request to http://localhost:5000/bert_crf with body as json of input string {text: value}
'''
app = Flask(__name__)

def bert_crf(text):
    # Model repo
    model_name = "jordyvl/bert-base-cased_conll2003-CRF-first-ner"

    # Get the pretrained model
    model = AutoModelForTokenClassification.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)

    # Tokenize input
    inputs = tokenizer(text, return_tensors="pt")

    # Apply model
    outputs = model(**inputs)
    predictions = torch.argmax(outputs.logits, dim=2)

    # Convert token ids to labels
    tags = [model.config.id2label[prediction.item()] for prediction in predictions[0]]

    # Extract named entities
    entities = []
    current_entity = None

    for i in range(len(tags)):
        if tags[i].startswith('B-'):
            if current_entity:
                entities.append(current_entity)
            current_entity = {'entity': tags[i][2:], 'text': tokenizer.convert_ids_to_tokens(inputs.input_ids[0][i].item())}
        elif tags[i].startswith('I-'):
            if current_entity:
                token = tokenizer.convert_ids_to_tokens(inputs.input_ids[0][i].item())
                if token.startswith('##'):
                    current_entity['text'] += token.replace('##', '')
                else:
                    current_entity['text'] += ' ' + token
        else:
            if current_entity:
                entities.append(current_entity)
                current_entity = None

    return entities

@app.route('/bert_crf', methods=['POST'])
def ner():
    text = request.json['text']
    
    entities = bert_crf(text)
    
    return jsonify(entities)

if __name__ == '__main__':
    app.run()