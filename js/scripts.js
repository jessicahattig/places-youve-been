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

//UI Logic
window.addEventListener("load", function() {
  document.querySelector("form#new-destination"). addEventListener("submit", handleFormSubmission);
});

let destinationsList = new DestinationsList();

function handleFormSubmission(event) {
  event.preventDefault();
  const location = document.querySelector("input#new-location").value;
  const landmarks = document.querySelector("input#new-landmarks").value;
  const timeOfYear = document.querySelector("input#new-time-of-year").value;
  const notes = document.querySelector("input#new-notes").value;
  let newDestination = new Destination(location, landmarks, timeOfYear, notes);
  destinationsList.addDestination(newDestination);
  console.log(destinationsList.destinations);

window.addEventListener("click", function() {
  th
  })
  //document.getElementById("destinations").append(location)
}

//display destinations
//display destination details
  //when user clicks on destination