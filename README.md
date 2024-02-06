# Plan-with-Love
Travel Destinations App
This is a simple React application that displays information about various travel destinations. Users can view details about each destination, such as its name, description, price, and an image. They can also remove destinations they are not interested in.

Project Structure
The project consists of the following files and directories:

Data.js: This file contains an array of objects, each representing a travel destination with its details such as id, name, info, image URL, and price.
App.js: This is the main component where the state is managed. It imports the data from Data.js and passes it to the Tours component.
Tours.js: This component receives the list of destinations as props and maps through them to render individual Card components.
Card.js: This component renders the details of each destination as a card. It also handles the functionality to show/hide additional information and the ability to remove a destination.
styles.css: This file contains CSS styles for the application layout and design.
Running the Application
To run the application, follow these steps:

Make sure you have Node.js installed on your system.
Clone this repository to your local machine.
Navigate to the project directory in your terminal.
Run npm install to install the dependencies.
Run npm start to start the development server.
Open your browser and go to http://localhost:3000 to view the application.
Features
View a list of travel destinations with their details.
Expand/collapse the description of each destination to see more or less information.
Remove destinations from the list if not interested.
Refresh the list of destinations if none are left.
Technologies Used
React.js: JavaScript library for building user interfaces.
CSS: Styling the application layout.
npm: Package manager for Node.js.
