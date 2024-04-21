const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res)=>{
    res.send('<h1>Home</h1> <a href="/api/phone">Phones</a>'); //link created to visit the json file
})


/*
//params(:)
In Express.js, route parameters (or URL parameters) are
placeholders in the URL pattern that match specific 
parts of the URL. Route parameters(objects) are defined by 
placing a colon (:) followed by the parameter name in the URL pattern.
 */
// app.get("/api/phone/:phoneID", (req, res)=>{
//     const {phoneID} = req.params; // Access the parameter value using req.params
//     console.log(req.params);
//     const singleItem = phone.find((item)=> item.id ===  Number(phoneID));
//     if(!singleItem){
//         res.status(404).send("Item not found!!!")
//     }
//     res.json(singleItem);
// })

/*
//query(?)
In Express.js, query parameters are key-value
pairs that appear in the URL after the ? character.
They are used to provide additional data to the server in a request. 
*/
app.get("/api/v1/query", (req, res)=>{
    let sortedPhone = [...phone];
    const {search, limit} = req.query; //Query parameters are accessed through the req.query object in Express route handlers.
    console.log(req.query); 

    if(search){
        sortedPhone = sortedPhone.filter((item)=> {
            return item.name.startsWith(search); //items starting with a particular string will be filtered out in sortedPhone
        });
    }
    if(limit && !isNaN(limit)){
        sortedPhone = sortedPhone.slice(0, Number(limit)); //
    }
    /*the response will contain at most 'limit' no of items 
    that match the search criteria.
    If the limit parameter is not provided or is 
    not a valid number, all matching items will be
    returned without any limit. */

    res.json(sortedPhone);
    //res.send("Query in ExpressJs");
});



//accessing single product
app.get("/api/phone/1", (req, res)=>{
    const singleItems = phone.find((item)=> { return item.id === 1})
    res.json(singleItems);
})

//redirects to the json file
app.get("/api/phone", (req, res)=>{
    const newItems = phone.map((item)=>{ //mapping selected data
        const {id,name,image} = item;
        return {id, name, image};   
    })
    res.json(newItems); //shwowing selected data; products
    //res.json(phone); //shwoing all data; {products}
})


app.listen(3000, ()=>{
    console.log("Server Is running on Port 3000");
})