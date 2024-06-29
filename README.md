# Bike Management Dashboard

Welcome to the Bike Management Dashboard, a comprehensive system for efficiently managing bike inventory, tracking sales, and analyzing sales history.

## Live Demo

link:https://bike-management-dashboard-server-gamma.vercel.app

## API End Points With Example Data

### Local BaseUrl: http://localhost:5000/api

### Hosted Url:https://bike-management-dashboard-server-gamma.vercel.app

### Authentication

1. Login: /auth/login
   {
   "email": "alice.johnson@example.com",
   "password": "securePassword123"
   }
2. Register: /users/create-user
   {
   "name": "Alice Johnson",
   "email": "alice.johnson@example.com",
   "password": "securePassword123",
   "contactNumber": "+1234567890"
   }

### Bike CRUD Operations

3. Add New Bike To Inventory: /bikes/add-new-bike
   {
   "name": "race bike",
   "price": 2099,
   "quantity": 18,
   "releaseDate": "2023-06-15T00:00:00.000Z",
   "brand": "excilent Brand",
   "model": "Trailblazer1235",
   "type": "hill",
   "size": "Large",
   "color": "Black",
   "frameMaterial": "Aluminum",
   "suspension": "Front",
   "image":"https://images.unsplash.com/photo-1508357941501-0924cf312bbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   }
4. Get Bike List: /bikes
5. Get Single Bike: /bikes/bikeId
6. Update Bike Detail: /bikes/bikeId
7. Delete Bike: /bikes/bikeId

### Sell Operations

8. Sell Product: /sale
   {
   "bike": "65b4b333110394a5bf586099",
   "quantity": 1,
   "buyerName": "John Doe",
   "saleDate": "2024-01-25T12:30:00.000Z"

} 9. Selled Product List: /sale/sales-history

## Installation steps

# Clone the repository

git clone https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-server-side-moyuriakther

# Change into the project directory

cd l2b2-full-stack-a5-server-side-moyuriakther

# Install dependencies

npm install

# Start Project Locally

npm run start:dev
