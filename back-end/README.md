# BackEnd Installation 

## PostgreSQL Installation on windows

If you don't have postgresql installed follow this link to download `https://www.postgresql.org/download/`. 

## PostgreSQL Configuration on windows
Setup Database, Database User, password and Host with this credentials 
```
        HOST: localhost,
        database: postgres,
        user:     postgres,
        password: postgres
``` 

If you are having problem with the setup you can follow the instruction on this link `https://www.javatpoint.com/install-postgresql` , `https://www.javatpoint.com/postgresql-create-database`

## PostgreSQL Installation on linux
Follow this link to download and install Postgress on linux.
https://www.postgresql.org/download/linux/ubuntu/.
also install pgAdmin4, see link https://www.pgadmin.org/download/pgadmin-4-apt/.
### Creating a user: 
```
At the command line, run the following command:

sudo service postgresql start
sudo -u postgres createuser postgres
sudo -u postgres createdb postgres
sudo -u postgres psql
alter user postgres with encrypted password 'postgres';
grant all privileges on database postgres to postgres ;
```

## Knex Installation

### Run  on windows
```
 At the application root (i.e back-end/)

 npm install knex -g
 npm install knex --save
 npm install pg --save
 npm install
``` 
NB: if this command was properly executed , then if you run `Knex` on this terminal at this point, you should get a response showing list of knex commands, if not run the command again.

### Run on linux
```
 At the application root (i.e back-end/)

 sudo npm install knex -g
 npm install knex --save
 npm install pg --save
 npm install
``` 
NB: if this command was properly executed , then if you run `Knex` on this terminal at this point, you should get a response showing list of knex commands, if not run the command again.

## Build

```
cd pgconfig and Run `npm install`.
cd .. (ie the root of back-end)
Run `npm install`

```

## Database Migration
At the root of back-end, 
Run `Knex migrate:latest`.

## Starting Back-end Server
At the root of back-end, 
Run `node server.js` or `nodemon server`.

## final

Your server should be running on port 5000 right now.
