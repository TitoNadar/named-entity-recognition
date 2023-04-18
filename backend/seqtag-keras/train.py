import seqtag_keras
from seqtag_keras.utils import load_conll

# url = 'https://storage.googleapis.com/chakki/datasets/public/ner/model_en.zip'
# weights, params, preprocessor = download(url)
# model = seqtag_keras.Sequence.load(weights, params, preprocessor)
# text = 'President Obama is speaking at the White House.'
# output = model.analyze(text)
# print(output)

weights = "pretrained_model\weights.h5"
params = "pretrained_model\params.json"
preprocessor = "pretrained_model\preprocessor.json"

x_train, y_train = load_conll('data/conll2003/en/ner/train.txt') 
x_test, y_test = load_conll('data/conll2003/en/ner/test.txt')
model = seqtag_keras.Sequence()
model.fit(x_train, y_train, epochs=2)
model.save(weights, params, preprocessor)