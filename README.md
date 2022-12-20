# Carownas - Backend

## About 
This Project was Created for the Human-Computer Interaction subject of Computer Science course

Used Technologies:  NestJS + PrimsaJS + PostgreSQL

Project Design on figma is available [here](https://www.figma.com/file/UfQrKfacyuP2a5FUfpv0IE/IHC-CAROWNAS?node-id=374%3A3&t=1NC92Yg1t7n9oEys-0) (Version 1.2)

Frontend Project available [here](https://github.com/KozielGPC/carownas-app)

## Run Project

Create .env file and setup with your config:
### `cp .env.example .env` 

Update `DATABASE_URL` env to match your database connection

Add Project Dependencies:
### `yarn install` 

Run Prisma migrations
### `yarn prisma migrate deploy` 

Add Prisma generated files
### `yarn prisma generate` 

Run the Project:
### `yarn start:dev` 

