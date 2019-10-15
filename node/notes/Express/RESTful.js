// RESTful api
// Client - frontend
// Communtion happens through http. Client sends a request to the server and serve responds
// Server - backend, client needs to talk to the server
// Representational State Transfer
// CRUD operations

// HTTP methods: 
// 1. Get: getting data
// 2. Post: post data or show data
// 3. Put: edit data
// 4. Delete: delete data

// Get customers
// Request:
GET /api/customers
GET /api/customers/1

// Response:
[
    { id: 1, name: `Matt`},
    { id: 2, name: `John`},
]

// Update customer
// Request:
PUT /api/customers/1

// Response:
    { id: 1, name: `Matthew`},


// Delete customer
// Request:
DELETE /api/customers/2

// Create customer
// Request:

POST /api/customers