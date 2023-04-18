Steps to run the app:

NOTE: The commands pertain to windows environment. Logic is the same across platforms.

1. Create virtual environment by running the following commands.
```
python -m venv venv
```
2. Activate virtual environment.
```
venv\Scripts\activate
```
3. Install required modules in virtual environment (this will take a few minutes)
```
pip install -r requirements.txt
```
4. Run the app.
```
flask --app app.py run
```