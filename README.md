# BackendVS (Backend versus with different programming languages).

The following project aims to create the same backend using different programming languages in order to observe the differences in development and performance, measured in seconds per task, among the backends.

## Which backend programming languages will be compared?

- Typescript with the NestJS framework
- Java with the Spring Boot framework
- Python with the FLASK framework
- C# with the ASP.NET Core framework
- Rust with the Actix-web framework
- GO with the Gin Web framework

## What will the backend consist of?

The backend will consist of a JSON REST API written in the different programming languages, a non-relational MongoDB database, and a relational PostgresSQL database. The databases will be run locally using docker-compose.

![draw.io](./images/vsBackend.drawio.svg)

## What actions will the REST API perform?

1. MongoDB bulk insert: Save all documents in a single query in MongoDB.
2. Get elements from MongoDB: Get all elements from MongoDB in a single query.
3. Massive updates to MongoDB: Update all documents in MongoDB by changing only one value in the document.
4. Mapping from MongoDB to PostgreSQL: Retrieve all elements and convert them from the structure they have in MongoDB to the required format for PostgreSQL.
5. PostresSQL bulk insert: Save in bulk the elements mapped from MongoDB to store them in PostgreSQL.

## Comments:

### SpringBoot.

There are many options for creating a REST API both by language (Java and Kotlin version) and by compiler tools (Gradle and Maven). However there are many tools that help to configure all these things.
