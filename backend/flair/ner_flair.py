from flask import Flask, request, jsonify
from flair.data import Sentence
from flair.nn import Classifier
import flair
import json

tagger = None

def recognizer(sent):
    sentence = Sentence(sent)
    tagger.predict(sentence)
    
    entities = []
    for entity in sentence.get_spans('ner'):
        entity_text = entity.text
        entity_type = entity.get_labels()[0].value
        entity_dict = {
            "entity": entity_type,
            "text": entity_text
        }
        entities.append(entity_dict)
        
    return entities


app = Flask(__name__)
@app.route('/flair', methods=['POST'])
def ner_flair():
    text = request.json['text']
    
    entities = recognizer(text)
    
    return jsonify(entities)

if __name__ == '__main__':
    tagger = Classifier.load('ner')
    app.run()





