<!-- Answers to the Short Answer Essay Questions go here -->
* 1. Middleware is software that lies between an operating system and the applications running on it

* A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application.

* Bcrypt is a password hashing function.

* A JSON Web Token (JWT) is a JSON object that is defined in RFC 7519 as a safe way to represent a set of information between two parties. The token is composed of a header, a payload, and a signature.

* 2. Bcrypt has salts built-in to prevent rainbow table attacks.

* 3. The three parts of JWT are header, payload and signature

* The header is a JSON object and The header component of the JWT contains information about how the JWT signature should be computed.

* The payload component of the JWT is the data that‘s stored inside the JWT (this data is also referred to as the “claims” of the JWT).

* To get the JWT signature, the data string is hashed with the secret key using the hashing algorithm specified in the JWT header.

* Example: header.payload.signature = Token

* The reason why JWT are used is to prove that the sent data was actually created by an authentic source.