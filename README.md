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
Car - info

####  Request
`GET /api/user/car/{id}`
```
curl http://localhost:8082/api/user/car/{id}
```
####  Response
Status: 200 OK
Content-Type: application/json
Car - the car with the id: {id}

###   Update car
####  Request
`Put /api/user/car`
```
curl -X PUT -H "Content-Type: application/json" -d '{"carId":value, "newLicensePlate" : "value"}' "http://localhost:8082/api/user/car"
```
####  Response
Status: 200 OK
Content-Type: application/json
Car - updates the car with the id "carId" with the new license plate "newLicensePlate"


###   Delete car
####  Request
`Delete /api/user/car/{id}`
```
curl -X DELETE http://localhost:8082/api/user/car/{id}
```
####  Response
Status: 200 OK
Content-Type: string "Car with id 5 deleted successfully."

###   Banning user
####  Request
`POST /api/admin/banstatus`
```
 curl  -H 'Content-Type: application/json' -d '{ "email":"user@eu.ro", "banUser":"boolean"}'  http://localhost:8082/api/admin/banstatus
```

####  Response
Status: 200 OK
Banned user.

###   Banning provider
####  Request
`POST /api/admin/banstatus`
```
 curl  -H 'Content-Type: application/json' -d '{ "email":"user@eu.ro", "banProvider":"boolean"}'  http://localhost:8082/api/admin/banstatus
```

####  Response
Status: 200 OK
Banned provider.
