import { PrismaClient } from '@prisma/client'
import { products } from './data/products'
import { categories } from './data/category'

const prisma = new PrismaClient()

async function main() {
 try {
       // Create categories
   await prisma.category.createMany({
    data: categories,
   })
   
    // Create products
 
  await prisma.product.createMany({
    data: products,
  })
} catch (error) {
    console.log(error, "soy yo el error")
 }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })