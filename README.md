# prisma-tutorial

## What is Prisma?

### Start a project

1. I initialize npm by typing
```
npm init -y
````
2.  I installed all the dependencies I needed (They are all dev dependencies for this project) by typing 
````
npm i --save-dev prisma typescript ts-node @types/node nodemon

3. created tsconfig.json file in the root directory and wrote this in it 

{
  "compilerOptions": {
    "sourceMap": true,
    "lib": ["esnext"],
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
  }
}

4. Initialize Prisma and also the DB that I am using with 
````
npx prisma init --datasource-provider postgresql

So I have prisma folder which contains schema.prisma and also .env which has db url in it that we need to make it our own DATABASE_URL.

Note : If I don't have prisma formatting related extension I could use the 

````
npx prisma format
```
5. Defining my schema by writing the models 
6. Doing the migration by npx prisma migrate or more specifically 

````
npx prisma migrate dev --name init
