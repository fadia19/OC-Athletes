# OC-Athletes

# Author: Fadia Tarek

# The repository contains two projects:

# 1- athletes project => A ReactJS frontend project that handles the webpages UI and data integration with the backend service.

# It has two main pages as per the requirements, Home Page with games and athletes listing, and Athlete Details page with the athlete information.

# To run the project, First run npm i to install the node_modules, Then run npm start which will run the project on `localhost:8000`.

# Please keep the project on this port to handle the CORS issues from the backend service.

# 2- api-service => A NodeJS backend service that handles the APIs implementation and database queries.

# The service has two main APIs, the `/games` to list the games along with their athletes for the home page render, And the `/medals/athleteId` to retrieve the athlete medals that get shown on the athlete information page.

# To run the project, First run npm i to install the node_modules, Then run npm start which will run the service on `localhost:8080`.

# Please keep the project running on this port to make sure that the Frontend service is communicating with the service on the correct url.
