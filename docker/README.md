# Running the Database on Docker

Open the terminal and navigate to this folder. 

Type in the terminal: 

docker build -t tmdb . 

docker run -p 3306:3306 -d tmdb

Where the first 3306 can be changed to the port you want to use to connect and smdb is the image name.\

# Running Redis (used for logout blacklist) on Docker

Type in the terminal: 

docker pull redis

docker run -p 6379:6379 -d --name redis redis
