function Flights() {

    function calculateNumberOfFlights(passengers, capacity) {
        let passengers = document.getElementById('passengers').value;
        let capacity = document.getElementById('capacity').value;
        let negPassengerMsg = "The number of passengers must be a positive integer value";
        let negCapacityMsg = "The capacity of the flight must be a positive integer value";
        try {
            if (passengers > 0) {
                console.log("Positive Passengers");
            }
            else {throw Error (negPassengerMsg);
            }                    
            
        } catch (error) {
            console.error("Error",negPassengerMsg); 
        }
        try {
            if (capacity > 0) {
                console.log("Positive Capacity");
            }
            else {throw Error (negCapacityMsg);
            }                    
            
        } catch (error) {
            console.error("Error",negCapacityMsg); 
        } 
    }
    if (passengers % capacity == 0) {
        return passengers / capacity;
    }

    if (passengers % capacity > 0) {
    return Math.ceil(passengers / capacity);
    }
  
    return {calculateNumberOfFlights};
}
module.exports = Flights();