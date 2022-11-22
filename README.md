# About the project

This project is a skills management system where users can create a profile with their soft and hard skills inside.

With this information project leaders will be able to sort users by skills so they can build an optimal team for the project needs.

# Development

The development of this application uses MySQL, NodeJS with Express and TypeORM, React and React Native.

# How to use

After cloning the repository, create the two docker containers:

### Running the Database on Docker

Open the terminal and navigate to this folder. 

Type in the terminal: 
```
docker build -t tmdb . 
docker run -p 3306:3306 -d tmdb
```

Where the first 3306 can be changed to the port you want to use to connect and smdb is the image name.

### Running Redis (used for logout blacklist) on Docker

Type in the terminal: 
```
docker pull redis
docker run -p 6379:6379 -d --name redis redis
```

Now you can install the dependencies, start the containers and start the application:
```
npm install
npm start
```

The `npm start` should be used inside the API folder, the WebApp folder and the Mobile folder.
