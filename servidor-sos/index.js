{
  "users": {
    "uid": "String (ID único)",
    "email": "String",
    "phone": "String",
    "role": "String (valores: 'user' o 'superuser')"
  },
  "alerts": {
    "alert_id": "String (ID de emergencia)",
    "user_ref": "DocumentReference(users)",
    "latitude": "Number",
    "longitude": "Number",
    "status": "String (valores: 'active' o 'cancelled')",
    "timestamp": "Timestamp"
  }
}
