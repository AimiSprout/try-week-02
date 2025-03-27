const { MongoClient } = require('mongodb');

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
driver.push({
    name: "James Bonds",
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
      
      // Task 3.
      // Insert drivers
      drivers.forEach(async (driver) => {
        const result = await driversCollection.insertOne(drivers);
        console.log(`New driver created with result: ${result}`);
      });
      
      // Task 5. Update by inreasing rate 0.1 for John Doe 
      const updateResult = await db.collection('drivers').updateOne(
        { name: "John Doe" },
        { $inc: { rating: 0.1 } }
      );
      console.log(`Driver updated with result: ${updateResult}`);

      // task 6. delete
      const deleteResult = await db.collection('drivers').deleteOne({ isAvailable: false });
      console.log(`Driver updated with the result: ${deleteResult}`);

      // Task 4. Query and update Drivers
      const availableDrivers = await db.collection('drivers').find({ 
        isAvailable: true,
        rating: { $gte: 4.5 }
      }).toArray();
      console.log("Available drivers:", availableDrivers);

    } finally {
      await client.close();
    }
  }