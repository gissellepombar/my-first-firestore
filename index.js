// import firbase-admin library
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import our credentials
import { service_account } from "./secrets.js";

// connect to firebase PROJECT
initializeApp({
    credential: cert(service_account)
})

// once connected, connect to FireStore
const db = getFirestore();

// create our object 
const food = {
    name: 'Grilled Octopus',
    style: 'Mediterranean',
    feeds: 4, 
    price: 29.99, 
    meal: 'appetizer',
    prepTime: '25 min',
    inStock: true,
    description: 'When prepared well, grilled octopus is an incredible delicacy.',
}

// create a new document 
//go into our database (db), 
//go into the 'foods' collection 
// add a new document with the data above (food)
 
// db.collection('foods').add(food)
//     .then(doc => console.log('Added food ----> ', doc.id))
//     .catch(console.error)
    
    //alternate way to write line 33
    //.catch(err => console.error(err))

db.collection('foods').get()
    .then (collection => { 
        const foods = collection.docs.map(doc => {
        let food = doc.data();
        food.id = doc.id;
        return food;
        //return
    });
    console.log(food);
    })
    .catch(console.error);
