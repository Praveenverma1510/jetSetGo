import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TravelRequestScreen = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearchFlights = () => {
    // Navigate to FlightResults screen with search parameters
    navigation.navigate('FlightResults', { origin, destination, departureDate, returnDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JetSetGo - Flight Booking</Text>
      <TextInput
        style={styles.input}
        placeholder="Origin"
        value={origin}
        onChangeText={text => setOrigin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={text => setDestination(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Departure Date"
        value={departureDate}
        onChangeText={text => setDepartureDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Return Date"
        value={returnDate}
        onChangeText={text => setReturnDate(text)}
      />
      <Button title="Search Flights" onPress={handleSearchFlights} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default TravelRequestScreen;
