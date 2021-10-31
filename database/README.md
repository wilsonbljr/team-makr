# Running the Database on Docker

Open the terminal and navigate to this folder. 

Type in the terminal: 

docker build -t tmdb . 

docker run -p 3309:3306 -d tmdb

Where 3309 can be changed to the port you want to use to connect and smdb is the image name.