## React-Currency
clone this project git clone https://github.com/raldeskrisnu/React-Currency.git

## Running Frontend side
**Running Docker**
1. install docker first 
    - mac : https://docs.docker.com/docker-for-mac/install/
    - windows : https://docs.docker.com/docker-for-windows/install/
2. Run command **docker image build -t yourapp:app**
3. you can see image if docker succesfully build with this command **docker image ls**
4. and then run command **docker container run -it -p 3000:3000 yourapp:app**
5. open http://localhost:3000

## Running Backend Side
**Running Docker**
1. Run command **docker image build -t backend:app**
2. you can see image if docker succesfully build with this command **docker image ls**
3. and then run command **docker container run -it -p 8080:8080 backend:app**
4. tested on postman

## list endpoint
1. http://localhost:8080/api/currencylatest/
2. http://localhost:8080/api/basecurrency/USD