/*
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

// show the data in the console
console.log(drivers);

// Task 2.
// TODO: show all the drivers name in the console
drivers.forEach (driver => console.log(driver.name));

// Task 2.
// TODO: add additional driver to the drivers array
drivers.push({
    name: "James Bond",
    vehicleType: "BMW",
    isAvailable: true,
    rating: 4.9
});
console.log(drivers);
        

async function main() 
{
    try 
    {
      await client.connect();
      const db = client.db("testDB");
      const driversCollection = db.collection("drivers");
      
      // Task 3.
      // Insert drivers
      drivers.forEach(async (driver) => {
        const result = await driversCollection.insertOne(driver);
        console.log(`New driver created with result: ${result}`);
      });
      
      // Task 4. Query and update Drivers
      const availableDrivers = await db.collection('drivers').find({ 
        isAvailable: true,
        rating: { $gte: 4.5 }
      }).toArray();
      console.log("Available drivers:", availableDrivers);
      
      // Task 5. Update by inreasing rate 0.1 for John Doe 
      const updateResult = await db.collection('drivers').updateOne(
        { name: "John Doe" },
        { $inc: { rating: 0.1 } }
      );
      console.log(`Driver updated with result: ${updateResult}`);
      
      // task 6. delete
      const deleteResult = await db.collection('drivers').deleteOne({ isAvailable: false });
      console.log(`Driver updated with the result: ${deleteResult}`);
      

      
    } catch (err) {
      console.error("Error:", err);
    }
      finally 
      {
        await client.close();
      }
}
main().catch(console.error);
*/


/// this one dia output lain so kena phm kan. esk try buat asing '' task i mean run each code
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

// Show the data in the console
console.log(drivers);

// Task 2: Show all the drivers' names in the console
drivers.forEach(driver => console.log(driver.name));

// Task 2: Add an additional driver to the drivers array
drivers.push({
    name: "James Bond",
    vehicleType: "BMW",
    isAvailable: true,
    rating: 4.9
});
console.log(drivers);

async function main() {
    try {
        await client.connect();
        const db = client.db("testDB");
        const driversCollection = db.collection("drivers");

        // Task 3: Insert drivers into MongoDB
        for (const driver of drivers) {
            const result = await driversCollection.insertOne(driver);
            console.log(`New driver created with result: ${JSON.stringify(result)}`);
        }
        
        /*
        // Task 4: Query available drivers with rating >= 4.5
        const availableDrivers = await driversCollection.find({
            isAvailable: true,
            rating: { $gte: 4.5 }
        }).toArray();
        console.log("Available drivers:", availableDrivers);

        // Task 5: Update John Doe's rating by 0.1
        const updateResult = await driversCollection.updateOne(
            { name: "John Doe" },
            { $inc: { rating: 0.1 } }
        );
        console.log(`Driver updated with result: ${JSON.stringify(updateResult)}`);

        // Task 6: Delete unavailable drivers
        const deleteResult = await driversCollection.deleteMany({ isAvailable: false });
        console.log(`Driver(s) deleted with result: ${JSON.stringify(deleteResult)}`);
        */
       
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);