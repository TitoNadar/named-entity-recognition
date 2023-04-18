import csv
import os
from sklearn.metrics import precision_score, accuracy_score, recall_score, f1_score
import torch
from transformers import AutoTokenizer, AutoModelForTokenClassification, BertTokenizer

# Read input from test.csv
input_text = []
true_labels = []
count = 0

with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test.csv'), 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        if row != [''] and len(row[0].split(' ')) != 1:
            row = row[0].split(' ')
            input_text.append(row[0])
            true_labels.append(row[3])
            
            
input_text = ' '.join(input_text)

labels = ['B-LOC', 'I-LOC', 'B-PER', 'I-PER', 'B-MISC', 'I-MISC', 'B-ORG', 'I-ORG' 'O']

# Run the model on test data
model_name = "jordyvl/bert-base-cased_conll2003-CRF-first-ner"

# Get the pretrained model
model = AutoModelForTokenClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Tokenize input
inputs = tokenizer(input_text, return_tensors="pt")

# Apply model
outputs = model(**inputs)
predictions = torch.argmax(outputs.logits, dim=2)

# Convert token ids to labels
predicted_labels = [model.config.id2label[prediction.item()] for prediction in predictions[0]]

precision = precision_score(true_labels, predicted_labels[1:-3], labels=labels, average='micro')
accuracy = accuracy_score(true_labels, predicted_labels[1:-3])
recall = recall_score(true_labels, predicted_labels[1:-3], average='micro')
f1 = f1_score(true_labels, predicted_labels[1:-3], average='micro')

print(f'Precision: {precision}')
print(f'Accuracy: {accuracy}')
print(f'Recall: {recall}')
print(f'F1 score: {f1}')

