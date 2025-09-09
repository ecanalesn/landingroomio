import React, { useState } from 'react';
import BookingForm from '../../components/BookingForm/BookingForm';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    accommodation: '',
    numberPeople: '',
    customers: [
      { name: '', surname: '', email: '', phone: '' }
    ],
    startDate: '',
    endDate: '',
    comments: ''
  });

  return (
    <div 
      className="booking-page"
      style={{
        backgroundImage: `url('/images/booking.png')`
      }}
    >
      <div className="booking-header">
        <div className="container">
          <h1>Formulario de Reserva</h1>
        </div>
      </div>

      <div className="booking-content">
        <div className="container">
          <BookingForm 
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;

