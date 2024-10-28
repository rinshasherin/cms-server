// importing json-server library
const jsonServer=require('json-server')

// creating server instance
const cmsServer=jsonServer.create()

// getting default middleware
const middleware=jsonServer.defaults()

// setting routes for resources
const routes=jsonServer.router('db.json')

// configuring server
cmsServer.use(middleware)
cmsServer.use(routes)

const PORT=3000 || process.env.PORT

cmsServer.listen(PORT,()=>{
    console.log("Server running at " + PORT)
})
