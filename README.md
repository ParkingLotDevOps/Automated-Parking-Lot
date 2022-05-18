# API - Automated Parking Lot

## User endpoint.

###   Get list of users
####  Request
`GET /api/users/`
```
curl -H "Authorization: Bearer <ACCESS_TOKEN>" http://localhost:8082/api/users
```
####  Response
Status: 200 OK
Content-Type: application/json
[User] - array of users

###   Save user
####  Request
`POST /api/user/save/`
```
curl  -H 'Content-Type: application/json' -d '{"username":"user1", "password":"Strong122@", "name":"user", "email":"user@eu.ro"}'  http://localhost:8082/api/user/save
```
####  Response
Status: 201 OK
Content-Type: application/json
user - info


###   Add role to user
####  Request
`POST /api/add/role`
```
 curl  -H 'Content-Type: application/json' -d '{ "email":"user@eu.ro", "role":"USER"}'  http://localhost:8082/api/add/role
```

####  Response
Status: 200 OK
Role added.

### Get refresh token
####  Request
`GET /api/token/refresh`
````
 curl -H "Authorization: Bearer <REFRESH_TOKEN>" http://localhost:8082/api/token/refresh
````

####  Response
Status: 200 OK
{
	"access_token" : <NEW_ACCESS_TOKEN>,
	"refresh_token" :<REFRESH_TOKEN>
}


## Car endpoint.
####  Request
###   Save car
####  Request
`POST /api/user/car`
```
curl  -H 'Content-Type: application/json' -d '{"licensePlate" : "VS06PST"}' http://localhost:8082/api/user/car
```
####  Response
Status: 201 OK
Content-Type: application/json
user - info

####  Request
`GET /api/user/car/{id}`
```
curl  -H http://localhost:8082/api/user/car/{id}
```
####  Response
Status: 200 OK
Content-Type: application/json
[Car] - array of cars of user with the id: {id}

###   Update car
####  Request
`Put /api/user/car`
```
curl  -H 'Content-Type: application/json' -d '{ "carId" : 5, "newLicensePlate" : "VS07PST"} http://localhost:8082/api/user/car
```
####  Response
Status: 200 OK
Content-Type: application/json
car - updates the car with the id "carId" with the new license plate "newLicensePlate"


###   Delete car
####  Request
`Delete /api/user/car/{id}`
```
curl  -H http://localhost:8082/api/user/car/{id}
```
####  Response
Status: 200 OK
Content-Type: application/json
car - delete the car with the id {id}
