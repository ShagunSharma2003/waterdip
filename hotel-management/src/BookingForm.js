import React, { useState } from 'react';

const BookingForm = ({ rooms, onBooking }) => {
  const [customerName, setCustomerName] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRoom && customerName) {
      onBooking(parseInt(selectedRoom), customerName);
      setCustomerName('');
      setSelectedRoom('');
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <div>
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div>
          <label>Select Room:</label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            <option value="">-- Select Room --</option>
            {rooms.map((room) =>
              room.available ? (
                <option key={room.id} value={room.id}>
                  {room.name} - {room.type}
                </option>
              ) : null
            )}
          </select>
        </div>
        <button type="submit">Book Room</button>
      </form>
    </div>
  );
};

export default BookingForm;
