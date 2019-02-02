# java-react-webapp
creating a web app with React and Spring boot rest services

command to up the local server
`` ./mvnw spring-boot:run``
## rest apis

### group rest end points
```http://localhost:8080/api/groups```

##### response
```[
{"id":1,"name":"Sekhar","address":null,"city":null,"stateOrProvince":null,"country":null,"postalCode":null,"user":null,"events":[{"id":4,"date":"2018-12-12T18:00:00Z","title":"fullstack reactive","description":" first project","attendees":[]}]},{"id":2,"name":"babu","address":null,"city":null,"stateOrProvince":null,"country":null,"postalCode":null,"user":null,"events":[]},{"id":3,"name":"karri","address":null,"city":null,"stateOrProvince":null,"country":null,"postalCode":null,"user":null,"events":[]}```]