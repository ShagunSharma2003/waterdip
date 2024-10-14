import React from 'react';

const RoomList = ({ rooms }) => {
  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {room.name} - {room.type} ({room.available ? 'Available' : 'Booked'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
