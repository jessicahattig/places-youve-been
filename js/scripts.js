//Business logic for DestinationsList
function DestinationsList() {
  this.destinations = {};
  this.currentId = 0;
}

DestinationsList.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
}

DestinationsList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

DestinationsList.prototype.findDestination = function(id) {
  if (this.destinations[id] !== undefined) {
    return this.destinations[id];
  }
  return false;
}
  
DestinationsList.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
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