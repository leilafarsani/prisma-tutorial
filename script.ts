import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//prisma.user.findFirst

// writing a little bit of code here 

async function main(){
    //... we will write our Prisma Client queries here.
}
main()
.catch(e=> {
    console.error(e.message)
})
.finally(async()=>{
    await prisma.$disconnect()
})