import requests

BASE = "http://127.0.0.1:5000/api/classes"

# Create
res = requests.post(BASE + "/", json={
    "name": "Yoga",
    "instructor": "Alice",
    "schedule": "Mon 10AM"
})
print("Create:", res.json())

# Get all
res = requests.get(BASE + "/")
print("Get all:", res.json())

# Update
res = requests.put(BASE + "/1", json={
    "name": "Advanced Yoga",
    "schedule": "Mon 11AM"
})
print("Update:", res.json())

# Delete
res = requests.delete(BASE + "/1")
print("Delete:", res.json())