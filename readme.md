# This is a repo for learning docker
The docker container has development and production docker-compose.yml files. Docker Compose runs three services: 
1. An Node environment that runs and Express.js app.  
2. A PostgreSQL service as the db
3. And NGINX as a reverse proxy.

I followed along a [Sanjeev Thiyagaraj tutorial](https://www.youtube.com/playlist?list=PL8VzFQ8k4U1JEu7BLraz8MdKJILJir7oY) to build most of it.

## Volumes
### Bind Mounts help
A bind mount volume allows you to continuously copy over files as they are changed from you working directory to your Docker container. 

From the command line:
```bash
docker run -p 3000:3000 -d --name node_test -v $(pwd):/app mschmidty/deploy_test_server  
```

### Anonymous Volumes
Can be used to keep node modules folder. 

```
-v /path/to/folder

-v /app/node_modules
```

### You can backup all volumes

## Docker Compose
Gotcha if you are using docker compose and you change your image (`Dockerfile)` you need do use the `--build` flag when running `docker-compose up -d` in order for the image to be rebuilt.