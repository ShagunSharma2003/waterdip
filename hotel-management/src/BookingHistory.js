import React from 'react';

const BookingHistory = ({ bookings, rooms }) => {
  const getRoomName = (roomId) => {
    const room = rooms.find((room) => room.id === roomId);
    return room ? room.name : 'Unknown';
  };

  return (
    <div>
      <h2>Booking History</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.customerName} booked {getRoomName(booking.roomId)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
