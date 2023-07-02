Description: Destinations()

Test: "It should create an object from the users inputted destination. "
Code: const destination = new Destination ("Utah", "Zion", "spring", "Beautiful"); 
      console.log(destination);
Expected Output: Object { location: "Utah", landmarks: "Zion", timeOfYear: "spring", notes: "Beautiful" }

Description: DestinationsList()

Test: "It should add inputted destination to the destination list."
Code: >const destinationsList = new DestinationsList();
      >const newDestination = new Destination("Utah", "Zion", "spring", "Beautiful");
      >destinationsList.addDestination(newDestination);
      >console.log(DestinationsList)
Expected Output: DestinationsList {destinations: location: "Utah", landmarks: "Zion", timeOfYear: "spring", notes: "Beautiful" }

Test: "It should add a unique ID to added destination."
Code: >const destinationsList = new DestinationsList();
      >const newDestination = new Destination("Utah", "Zion", "spring", "Beautiful");
      >destinationsList.addDestination(newDestination);
      >console.log(destinationsList)
Expected Output: currentId: 1

Test: "It should find added destinations using their ID." 
Code: destinationsList.findDestination(1);
      >const destination1 = new Destination("Utah", "Zion", "spring", "Beautiful")
      >const destination2 = new Destination('Oregon','Crater Lake', 'Summer', 'Beautiful landscapes');
      >const destination3 = new Destination('France', 'Louvre Museum', 'Spring', 'Historical landmarks');
Expected Output: Destination {location: "Utah", landmarks: "Zion", timeOfYear: "Spring", notes: "Beautiful"}

<!-- Test: "It should return false if destination ID is undefined."
Code: destinationsList.findDestination(Q);
Expected Output: false -->