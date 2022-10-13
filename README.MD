#### address-book api

Address book api

#### Features

- Create Contacts(Address books)
- Contact management

#### Installation

To run this service, you need to have the following dependencies installed:

- NodeJS [version 10 or greater](https://nodejs.org).
- Yarn [version 1 or greater]() or Npm [version 5 or greater]("it comes with nodejs on installation").
- Mongodb [installed locally or with mongodb atlas or any mongodb link of your choice, it must be valid](https://mongodb.com).

* Download or clone this application to your computer `https://github.com/JamiuKolawole04/address-book-api.git`
* Navigate to the project directory
* Install all dependencies using `npm install` or `yarn`
* Set up .env file in the root directory
* In the .env file, add the following: ``
  MONGO_URL= "your mongodb data base url -- A valid one otherwise an error will be thrown"
  PORT=8085
  JWT_SECRET=LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlCT1FJQkFBSkJBSjdVblpyNUxpUGJxbDRENlo3VHVKK2NFMkI0Y3FzbnUzeUJaUHo2NmtqZDhJT1RFdjlNCkpEdmhMQ05PczYyWHBZcmFZYU5HS3UrN3Q4YVVjcWNoRzJNQ0F3RUFBUUpBRS84YXRKY29tdlVkOXVZeE5JRGQKWHFMc3dabUlma25yVGRxUWwxVVR5QWFPRWpIRGFnR0lGdEhRZE5IZTAybkp6a2Z1WkdWSkJVRmo1aTJJVyszMQpxUUloQU9LQVRxOVpSZHR0T0JDWWJLR3VpbjZnd1FVZ2YzUGkwSjh3Snh3cjNRVDFBaUVBczRRZ0lhR1c1V3NaCmNqWUQ3bVpwcXBiRkdubnBvMVR6QU1YS2psQ2dKL2NDSUQyZVZFbWx5cmhnSlNGMnBnN3lNZUV6RUcrNW9KTEIKUUtvZDZuWGloUFZGQWlCY0ZuUXhMR1p1NjhEUzhOaVZiQjNhYjV0TzJLazhxekE0L2ozSlFaeld3d0lnU2N1awoyZWlBM3E5ci9EdDQ3OUZHek4xSEVSdzJ2TXZjeEV6REZWRnV5aDg9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t

``

- run `npm run start` or `yarn start` to start the project

- Open http://localhost:8085 on your browser to ensure the service is running
- To access contacts routes, token must be provided and must be passed as a bearer in the header request
- The token route is `http://localhost:8085/api/contact/auth/token` - Get request. The token will be provided, copy it and then pass it to other routes to proceed.
- Take the token and pass it as a header requst in other routes: req.headers.authorization = `Bearer + ${your generated token received from the above route}`
- Enjoy

#### Router

- contact.js

#### Crate address or contact sample

-- url: `http://localhost:8085/api/contact` - POST request
-- payload(JSON content) = {
"firstName": "Saksham",
"lastName": "Srivastava",
"phoneNumber": "+91 91008 42226",
"address": "9A Mogadishu, Somali"
}

-- bulk contact sample = [
{
"firstName": "Saksham",
"lastName": "Srivastava",
"phoneNumber": "+91 91008 42226",
"address": "9A Mogadishu, Somali"
},
{
"firstName": "Saksham",
"lastName": "Srivastava",
"phoneNumber": "+91 91008 42226",
"address": "9A Mogadishu, Somali"
}
]

### GET A SINGLE CONTACT ROUTE

-- url: `http://localhost:8085/api/contact/{contactId}` - GET request

### UPDATE A CONTACT ROUTE

-- url: `http://localhost:8085/api/contact/{contactId}` - PATCH request

### DELETE A CONTACT ROUTE

-- url: `http://localhost:8085/api/contact/{contactId}` - DELETE request

### GET ALL CONTACTS

-- url: `http://localhost:8085/api/contact` - GET request
NOTE: "this route returns a limited 5 data provided that data are up to 5 in the databse..If data are more than 5, then a page query string parameters with a question mark must be added to get the next 5 data e.g `http://localhost:8085/api/contact?page=2`
so therefore: `http://localhost:8085/api/contact` - returns first 5 data
`http://localhost:8085/api/contact?page=2` - returns next 5 data
`http://localhost:8085/api/contact?page=3` - returns next 5 data and so on...

SEARCHING THE DATABASE
To search and query the databse, use `http://localhost:8085/api/contact?(yourShemaQuery=value)` - GET request to get the desired result.

To search for contacts using firstname : `http://localhost:8085/api/contact?firstName=S` - returns all contacts having s in their first name.
e.g `http://localhost:8085/api/contact?firstName=Sandor`- returns all contacts with Sandor as their first name
e.g `http://localhost:8085/api/contact?firstName=abc` - returns all contacts with abc in their first name
NOTE: "value is case insensitive i.e Sandor === sandor, ABC === abc, S === s"

To search for contacts using last name: `http://localhost:8085/api/contact?lastName=K`- returns all contacts with k in their last name
e.g `http://localhost:8085/api/contact?lastName=Za` - returns all contacts with za or Za or ZA (value is case insensitive) in their last name
e.g `http://localhost:8085/api/contact?lastName=Arafat`- returns a contact with arafat in his or her last name

To search for contact using phone number: `http://localhost:8085/api/contact?phoneNumber=223` - returns all contacts having 223 in their phone numbers
e.g `http://localhost:8085/api/contact?phoneNumber=1` - returns all contacts with 1 in their phone number

To search for contacts using address: `http://localhost:8085/api/contact?address=c`- returns all contacts with c in their addresses
e.g `http://localhost:8085/api/contact?address=ade` - returns all contacts with ade in their addresses

"
