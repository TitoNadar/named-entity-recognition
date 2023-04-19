##### Copy this script to '.\code\backend\seqtag-keras\' location and run it from there

import seqtag_keras
from seqtag_keras.utils import load_conll
from sklearn.metrics import classification_report
from sklearn.preprocessing import MultiLabelBinarizer
import sys
sys.path.insert(1, '../code/backend/seqtag-keras')

weights = "pretrained_model\weights.h5"
params = "pretrained_model\params.json"
preprocessor = "pretrained_model\preprocessor.json"

x_train, y_train = load_conll('data/conll2003/en/ner/train.txt') 
x_test, y_test = load_conll('data/conll2003/en/ner/test.txt')

# model load kar aa line ma model variable ma
model = seqtag_keras.Sequence.load(weights, params, preprocessor)

y_pred = model.predict(x_test)
y_pred = MultiLabelBinarizer().fit_transform(y_pred)
y_test = MultiLabelBinarizer().fit_transform(y_test)
print(classification_report(y_test, y_pred))