import evaluate_model
import sys
import os
# sys.path.insert(1, '../../backend/ACE/')
sys.path.insert(1, '../code/backend/ACE/')
import train_ace

model, tokenizer = train_ace.load_model()
evaluate_model.evaluate(model, tokenizer)