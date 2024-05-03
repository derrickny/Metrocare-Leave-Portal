

import requests
import json

url = "http://localhost:8080/login/"
data = {
    "username": "Constand",
    "password": "OtungA@!311"
}
headers = {'Content-Type': 'application/json'}

response = requests.post(url, data=json.dumps(data), headers=headers)

print(response.status_code)
print(response.text)
