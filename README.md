# Cinema API documentation
- Login
- People
- Movies
- Roles
- Cast


# Login


## POST /v1/auth/sign_in

### Body Parameters:
```BODY JSON
{
  "email": "user@admin.com",
  "password": "12345678"
}
```

### Response body:
```JSON BODY
{
  "data": {
    "id": 1,
    "email": "user@admin.com",
    "provider": "email",
    "uid": "user@admin.com",
    "allow_password_change": false,
    "name": null,
    "nickname": null,
    "image": null,
    "type": "user"
  }
}
```

# People

## Create /v1/people/create

### Body Parameters:
```BODY JSON
{
  "person":{
		"first_name": "Un actor",
		"last_name": "Su apellid",
		"aliases": "snowden0"
	}
}
```

# Movies

## Create /v1/movies/create

### Body Parameters:
```BODY JSON
{
  "movie":{
		"title": "Un titulo",
		"release_year": "20-04-2020",
		"casts_attributes": [
			{
				"person_id": "1",
				"role_id": "1"
			},
			{
				"person_id": "5",
				"role_id": "2"
			}
		]	
	}
}
```
