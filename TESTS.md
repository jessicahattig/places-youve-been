Description: Destinations()

Test: "It should create an object from the users inputted destination. "
Code: const destination = new Destination ("Utah", "Zion", "spring", "Beautiful"); 
      console.log(destination);
Expected Output: Object { location: "Utah", landmarks: "Zion", timeOfYear: "spring", notes: "Beautiful" }

Description: DestinationsList()

Test: "It should add inputted destination to the destination list."
Code: const destinationsList = new DestinationsList();
      const newDestination = new Destination("Utah", "Zion", "spring", "Beautiful"); 
      console.log(destinationsList)
Expected Output: DestinationsList {destinations: location: "Utah", landmarks: "Zion", timeOfYear: "spring", notes: "Beautiful" }
