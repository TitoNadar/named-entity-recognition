import train_ace
from flask import Flask, request
import json

model = None
tokenizer = None

app = Flask(__name__)
@app.route('/ace', methods=['POST'])
def ace_api():
    text = request.json['text']
    output  = train_ace.run_model(text, model, tokenizer, predict=True)
    output_json = json.dumps(output)
    return output_json, 200, {'Content-Type': 'application/json'}


if __name__ == '__main__':
    model, tokenizer = train_ace.load_model()
    app.run()