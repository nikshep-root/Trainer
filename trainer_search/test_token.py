import requests
import json

url = "http://127.0.0.1:8000/api/token/"
data = {
    "username": "testuser",
    "password": "testpass123"
}

try:
    response = requests.post(url, json=data)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    if response.status_code == 200:
        print(f"Access Token: {response.json()['access']}")
except Exception as e:
    print(f"Error: {e}")
