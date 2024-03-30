import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const FlightResultsScreen = ({ route }) => {
  const { origin, destination } = route.params;
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/378e02e8e732bb1ac55b')
      .then(response => {
        const filteredFlights = response.data.filter(flight => {
          return flight.origin === origin && flight.destination === destination;
        });
        setFlights(filteredFlights);
      })
      .catch(error => console.error(error));
  }, [origin, destination]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flight Results</Text>
      <FlatList
        data={flights}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.flightItem}>
            <Text>Airline: {item.airline}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Departure Time: {item.departureTime}</Text>
            <Text>Arrival Time: {item.arrivalTime}</Text>
            <Text>Duration: {item.duration}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flightItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default FlightResultsScreen;
