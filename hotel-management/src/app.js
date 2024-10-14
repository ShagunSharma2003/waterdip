import React, { useState } from 'react';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import BookingHistory from './components/BookingHistory';
import './app.css'; // Optional CSS for styling

const App = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', type: 'Single', available: true },
    { id: 2, name: 'Room 102', type: 'Double', available: true },
    { id: 3, name: 'Room 103', type: 'Suite', available: true }
  ]);

  const [bookings, setBookings] = useState([]);

  const handleBooking = (roomId, customerName) => {
    const updatedRooms = rooms.map(room => {
      if (room.id === roomId) {
        return { ...room, available: false };
      }
      return room;
    });
    setRooms(updatedRooms);

    const newBooking = {
      id: bookings.length + 1,
      roomId: roomId,
      customerName: customerName
    };
    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="App">
      <h1>Hotel Management System</h1>
      <RoomList rooms={rooms} />
      <BookingForm rooms={rooms} onBooking={handleBooking} />
      <BookingHistory bookings={bookings} rooms={rooms} />
    </div>
  );
};

export default App;
