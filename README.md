# Component Library using React and Storybook

This repository contains a Component Library created using React and Storybook.

## Getting Started

To run the web application locally, follow these steps:

### Prerequisites

Make sure you have Docker, Node.js and npm installed on your machine.


### Installation

1. Clone this repository:

git clone https://github.com/cfontelar22/fontelar_christma_coding_assignment12.git

2. Navigate to the project directory:

cd fontelar_christma_coding_assignment12

3. Install dependencies for the React application:

npm install

4. Navigate to the site directory:

cd fontelar_christma_site

5. Install dependencies for the Storybook:

npm install

6. Build the production version of the component library:

npm run build

### Running the Site

To run the web application and Storybook locally, follow these steps:

1. Start the React development server:

npm start

2. Open a new terminal window/tab and navigate to the site directory:

cd fontelar_christma_site

3. Start Storybook

npm run storybook


### Accessing the Site

Once the development server and Storybook are running, you can access the web application and Storybook in your browser:

Web Application: [http://localhost:8083](http://localhost:8083)
Storybook: [http://localhost:6006](http://localhost:6006)

Update your package.json file

"scripts": {
  "start": "PORT=8083 react-scripts start",
  ...
}

1. Clear cache: If you're using a development server like react-scripts, sometimes clearing the cache can help. You can do this by running:

npm start -- --reset-cache or yarn start

### Or this way will work too:

Once the development server and Storybook are running, and updating the package.json file you can access the web application and Storybook in your browser using the following commands: 

Run the following command in your terminal to rebuild your React application:

npm run build

Once the build process is complete, you can run your application again using the serve package. Install serve globally if you haven't already:

npm install -g serve

Run your application using serve:

serve -s build -l 8083


### Docker Deployment
Alternatively, you can deploy the web application using Docker. Follow these steps:

1. Build the Docker image:

docker build -t fontelar_christma_coding_assignment12


2. Run the Docker container:
docker run -d -p 8083:80 fontelar_christma_coding_assignment12


3. Access the web application in your browser:
[http://localhost:8083](http://localhost:8083)


## Structure
The project structure is as follows:
- `fontelar_christma_site/`: Contains the React application.
- `Dockerfile`: Defines the Docker configuration for deploying the web application.
- `README.md`: Provides instructions for setting up and running the web application.

## Notes
- The Docker container hosts a production build of the React app for the component library.
- The site files are served using the NGINX web server.
- The application is accessible on port 8083 of your local machine.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
