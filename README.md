## About
An Angular project that builds a Front-End application to display  design to register  and preview an event.

App is running at [https://egzontina.github.io/event-planner/](https://egzontina.github.io/event-planner/).



## Installing and running for the first time locally

1. On root of the project run: 
```
npm i
```
2. Start the server: 
```
ng serve
```
3.  Navigate to 
```
http://localhost:4200/
```


## Development Process

**Project Creation & Setup**

This project is generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26.

Main Dependencies:
1. Angular Material (@angular/material)
2. Angular Flex-Layout (@angular/flex-layout) 


**Project Structure**

|-- app
     |-- components
       |-- event
           |-- [+] add-event
           |-- [+] preview-event
           |-- [+] event
           |-- event.service.ts
     |
     |-- shared
          |-- [+] header
          |-- [+] footer
          |-- [+] models
     |
     |-- [+] environments
|-- assets
     |-- [+] icons
     

## Deploy the app to GitHub Pages

Using angular-cli-ghpages:
1. Create the dist folder for the project and run it
```
ng deploy --base-href=/event-planner/
```


## IDE
Example is runnable from WebStorm IDE.



#### Author

[Egzontina Krasniqi](https://github.com/egzontina).

