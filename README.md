# Movie Company API Documentation
- Login
- People
- Movies
- Roles
- Cast


# Login

## Sign ing, POST /v1/auth/sign_in

### Body Parameters:
```JSON BODY
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

## Create, POST /v1/people/create

### Body Parameters:
```JSON BODY
{
  "person":{
		"first_name": "John",
		"last_name": "Doe",
		"aliases": "john_doe"
	}
}
```

## Update, PUT /v1/people/:person_id/update

### Body Parameters:
```JSON BODY
{
  "person":{
    "first_name": "first name updating"
  }
}
```

## Show, GET /v1/people/:person_id
## Index, GET /v1/people
## Delete, DELETE /v1/people/:person_id/destroy



# Role

## Get all, GET /v1/roles

### Response:
```JSON BODY
{
  "actor": {
    "id": 1,
    "name": "actor",
    "created_at": "2020-04-27T00:20:20.783Z",
    "updated_at": "2020-04-27T00:20:20.783Z"
  },
  "director": {
    "id": 2,
    "name": "director",
    "created_at": "2020-04-27T00:20:20.789Z",
    "updated_at": "2020-04-27T00:20:20.789Z"
  },
  "producer": {
    "id": 3,
    "name": "producer",
    "created_at": "2020-04-27T00:20:20.795Z",
    "updated_at": "2020-04-27T00:20:20.795Z"
  }
}
```

# Movies

## Create, POST /v1/movies/create

### Body Parameters:
```JSON BODY
{
  "movie":{
		"title": "Gladiador",
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
## Update, PUT /v1/people/:person_id/update

### Body Parameters:
```JSON BODY
{
  "movie":{
    "title": "Gladiador 2",
		"casts_attributes": [
			{
        "id": "1",
				"destroy": true
			}
		]	
  }
}
```

## Show, GET /v1/movies/:movie_id
## Index, GET /v1/movies
## Delete, DELETE /v1/movies/:movie_id/destroy



# Cast

## Create a person's cast to movie, POST /v1/casts/create

### Body Parameters:
```JSON BODY
{
  "cast":{
		"person_id": 1,
		"movie_id": 10,
		"role_id": 1
	}
}
```

## Destroy a person from casting, DELETE /v1/casts/:cast_id/destroy
