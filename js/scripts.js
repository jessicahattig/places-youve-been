//Business logic for DestinationsList
function DestinationsList() {
  this.destinations = {};
}

DestinationsList.prototype.addDestination = function(destination) {
  this.destinations[destination.location] = destination;
  return this.destinations;
}
  

//Business logic for destinations
function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
//



// Destinations.prototype.addLocation = function(location) {
//   location.id = this.assignId();
//   this.locations[location.id] = locations;
// };