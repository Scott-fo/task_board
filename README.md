# task_board

## How to run

All services and databases can be run in their own
container. To start the application, run:

`docker-compose up --build`

## Tech Stack

### Front End
- Typescript
- React
- Redux
- Docker

Supporting packages: Material UI, zod, luxon, axios

### Back End

- Gateway
  - NodeJS
  - Typescript
  - Express
  - gRPC
  - Docker
  
  Supporting packages: zod, swagger-jsdoc

- Emails Service
  - NodeJS
  - Typescript
  - gRPC
  - MySQL
  - Docker
  
- Lists Service
  - Go
  - gRPC
  - MongoDB
  - Docker
  
- Tasks Service
  - Go
  - gRPC
  - MongoDB
  - Docker
  - cron

## Illustration
![image](https://user-images.githubusercontent.com/34381264/208313415-75a5f42f-12d7-4e8b-9fb2-b6db7108f951.png)

## Architecture Schematic

![image](https://user-images.githubusercontent.com/34381264/208312846-b3b9e89f-1119-47c3-a728-a31952cef258.png)

## How to use the app

1) Lists can be created by clicking the + icon in the list tray
2) Tasks can be created within Lists by selecting CREATE
3) Lists can be renamed at the top of the task pane by clicking
    the name of the active list and typing
4) Tasks can be edited by selecting the edit button on each task panel
5) Tasks can be moved to different lists by selecting the checkbox next to
    the task and then clicking MOVE and selecting the desired target from the
    modal
6) Tasks can be deleted by selecting the checkbox next to the task and then
    clicking delete
7) MOVE and DELETE operations support 1-N tasks per transaction
8) Tasks can be marked as complete by selecting the complete button
9) Lists can be deleted by selecting the - button next to the corresponding list
    in the list tray
10) Users can subscribe via the inbox icon at the top right of the task pane
11) Subscribed users will receive notifications (only logged to stdout by emails service
    in this feature) when tasks are completed
12) Subscribed users will receive notifications when uncompleted tasks go past their deadline

## For Developers

There are no automated tests due to the heavy use of db methods and gRPC client/server calls.
It is more useful to use a service such as postman to test the API

The API for the gateway can be viewed at localhost:8000/api-docs when the app is started
The schemas for the gRPC services can be viewed in the protos/source folder

## Shortcomings

gRPC is currently only configured with insecure credentials. Before use in production it should
be setup with secure credentials.

There is little work done on the styling of the application. Tailwind is used in this project to support UX, but no work has been done on making the app pretty.
