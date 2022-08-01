Code Exercise
As the owner of ABC Vending LLC, an application is needed to track the inventory of our collection of vending machines across the globe.  The application will keep track of the products in our multiple warehouses, as well as each individual vending machine.  
	Each vending machine will contain multiple categories of products.  Each product will have its’ own price.  The products will be stored in one of the warehouses owned by ABC Vending in different parts of the world.	
Architecture
	Front End – Angular
	API/Microservice Layer – C#
	Database – Provide an ERD
o	The API can return hard-coded data from memory to avoid having to spend time creating a SQL database
	At least one unit test for the front-end and one for the API is to be provided
User Stories
	User Story 1
	 Given that the managers at each warehouse location need to view the list of inventory in their warehouse by category
When the user opens the application they should be able to view a list of products in their warehouse by category and product
	Acceptance Criteria
	The Warehouse Inventory interface should display a way to view up-to-date product counts by category, and by warehouse
User Story 2
Given that a truckload of products leave a given warehouse
When the truck has been loaded the user needs a way to update the inventory of that warehouse and adjust the number of products accordingly

	Acceptance Criteria
	The Warehouse Inventory interface should provide the ability to update total inventory which should be displayed by total products, categories, and individual product counts.  All the warehouses should be in sync as it comes to product quantities because they are all stored in a centralized data store.


# Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` or `ng test --browsers ChomeHeadless` to execute the unit tests via [Karma](https://karma-runner.github.io). Navigate to `http://localhost:9876/`.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
