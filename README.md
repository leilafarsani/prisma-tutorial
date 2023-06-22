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

So I have prisma folder which contains schema.prisma and also
.env which has db url in it that we need to make it our own DATABASE_URL.

Note : If I don't have prisma formatting related extension I could use the 

````
npx prisma format
```
5. Defining my schema by writing the models.
6. Doing the migration by npx prisma migrate or more specifically 

````
npx prisma migrate dev --name init
````
### Note:
If look at the terminal we see something important that it says 
Generated Prisma Client and it says it put it in my node modules folder @prisma\client. Essentially we have created a brand new prismaClient and this client is that thing for generator 
We are saying Hey, create me a prisma-client.js whenever I change all my code and I make changers to my database such as adding a model, I want you to update my client code which in this case is prisma-client. and that is what it does.

#### Every time we make a migration, it's going to update our client for us and that client is essentially all of the code for interacting with our database.

Now that I have added the user model, my client added a bunch of code automatically for me that allows me to interact with users, create them, read them, update them and so on and all of them are typed with TS so I have this nice type safety blanket. 

Unfortunately, I didn't have the client yet because I didn't have a client library yet. So I installed it with 
````
npm i @prisma/client
`````
This is going to install the client that it allows us to actually generate and use this client, and when we first install the client from doing the migration, we already have everything generated, but if we need to manually regenerate our client, we can type 
````
npx prisma generate
`````

and it's going to go through all the steps of generating based on whatever provider we want which is the default one, and now we can start using our prisma client because it automatically generated it for us and sorted it in that particular location and again, that's all of our Prisma code in that one place.

So, I just copied that little code that it gave me and I made a file called script.ts and inside there I just pasted that code and that allows me to access my PrismaClient. So now if I type prisma. I see it gave me a bunch of methods as well as the user right there and user represents that user table that I created. It's automatically generated for us. So we can say .user and we can see we have a bunch of different methods for example we can use the findFirst to get the very first user based on different criteria we pass in 
