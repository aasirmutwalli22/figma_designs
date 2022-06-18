# express.validator
use expressValidator for validating request query/params/body
- https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/
- https://express-validator.github.io/docs/
- also check custom validators from https://express-validator.github.io/docs/custom-validators-sanitizers.html

# express.request.session
implement user session
- https://codeshack.io/basic-login-system-nodejs-express-mysql/
- https://www.w3jar.com/node-js-login-registration-rest-api-mysql-db/

# best practices
- https://www.partech.nl/nl/publicaties/2020/07/9-trending-best-practices-for-rest-api-development#
- https://blog.risingstack.com/10-best-practices-for-writing-node-js-rest-apis/
- https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-1-3-bb06b6204197
- https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/

# mysql
- use transactions for multiple queries action and fallback

# typescript
## tsc --init
- create tsconfig.json file with the recommended settings in the working directory
- specify an output folder for all emitted files using
{"compilerOptions": { "outDir": "dist"}}

# express session  cookie
## node end
```
app.use( cors( {
    origin: ['*', 'http://127.0.0.1:5500'],
    credentials: true
} ) )
```
## using fetch api
```
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded"
    }

    let bodyContent = "username=user14&password=user@12345";

    fetch("http://127.0.0.1:3001/users/login", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
        credentials:"include",
        withCredentials: true
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
    })
```
```
axios.post(API_SERVER + '/login', { email, password }, { withCredentials: true })

//or 

const instance = axios.create({
  withCredentials: true
})
```