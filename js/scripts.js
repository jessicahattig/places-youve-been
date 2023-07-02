function placesBeen() {
  this.locations = {};
  this.landmarks = 0;
}

placesBeen.prototype.addLocation = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}