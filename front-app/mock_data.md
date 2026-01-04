# Mock Data Documentation

This document describes the mock data used for frontend development and testing.
The mock data is located in `src/api/mockData.ts`.

## User Info
```json
{
  "userId": "user_001",
  "nickName": "TennisFan",
  "avatarUrl": "https://example.com/avatar.png",
  "gender": 1,
  "age": 25,
  "level": "3.5",
  "bio": "Love tennis!",
  "creditScore": 100,
  "createdAt": "2023-01-01"
}
```

## Courts
List of available tennis courts.
```json
[
  {
    "courtId": "court_001",
    "name": "City Tennis Center",
    "address": "123 Main St",
    "latitude": 30.0,
    "longitude": 120.0,
    "phone": "123-456-7890",
    "businessHours": "08:00-22:00",
    "rating": 4.5,
    "reviewCount": 100,
    "pricePerHour": 50,
    "surfaceType": "Hard",
    "indoor": false,
    "hasLights": true,
    "amenities": ["Parking", "Shower"],
    "available": true
  }
]
```

## Matches
List of matches created by users.
```json
[
  {
    "matchId": "match_001",
    "publisherId": "user_002",
    "courtId": "court_001",
    "courtName": "City Tennis Center",
    "date": "2025-12-31",
    "startTime": "18:00",
    "endTime": "20:00",
    "matchType": "Singles",
    "levelMin": 3.0,
    "levelMax": 4.0,
    "currentPlayers": 1,
    "maxPlayers": 2,
    "costType": "AA",
    "costPerPerson": 50,
    "description": "Looking for a hitting partner.",
    "status": "Open",
    "createdAt": "2025-12-30",
    "distance": 1.5
  }
]
```

## Configuration
To use mock data, set `VITE_USE_MOCK=true` in `.env` file.
To use real backend, set `VITE_USE_MOCK=false` and configure `VITE_API_BASE_URL`.
