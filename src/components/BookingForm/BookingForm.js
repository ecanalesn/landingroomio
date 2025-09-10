import React from 'react';
import './BookingForm.css';

const BookingForm = ({ formData, setFormData }) => {
  const handleInputChange = (field, value, customerIndex = null) => {
    if (customerIndex !== null) {
      const newCustomers = [...formData.customers];
      newCustomers[customerIndex] = { ...newCustomers[customerIndex], [field]: value };
      setFormData({ ...formData, customers: newCustomers });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const renderCustomerFields = (index) => {
    const customer = formData.customers[index];
    const isRequired = index === 0;

    return (
      <div key={index} className="customer-section">
        <h3>Cliente {index + 1}</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`name${index}`}>Nombre:</label>
            <input
              type="text"
              id={`name${index}`}
              value={customer.name}
              onChange={(e) => handleInputChange('name', e.target.value, index)}
              required={isRequired}
              name={`customer_${index + 1}_name`}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`surname${index}`}>Apellidos:</label>
            <input
              type="text"
              id={`surname${index}`}
              value={customer.surname}
              onChange={(e) => handleInputChange('surname', e.target.value, index)}
              required={isRequired}
              name={`customer_${index + 1}_surname`}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`email${index}`}>Correo electrónico:</label>
            <input
              type="email"
              id={`email${index}`}
              value={customer.email}
              onChange={(e) => handleInputChange('email', e.target.value, index)}
              required={isRequired}
              name={`customer_${index + 1}_email`}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`phone${index}`}>Número de teléfono:</label>
            <input
              type="tel"
              id={`phone${index}`}
              value={customer.phone}
              onChange={(e) => handleInputChange('phone', e.target.value, index)}
              pattern="[0-9]{9}"
              placeholder="Número de teléfono"
              required={isRequired}
              name={`customer_${index + 1}_phone`}
            />
          </div>
        </div>
      </div>
    );
  };

  const handleNumberPeopleChange = (value) => {
    const numPeople = parseInt(value);
    const newCustomers = [];
    
    // Crear array de clientes según el número seleccionado
    for (let i = 0; i < numPeople; i++) {
      newCustomers.push({
        name: formData.customers[i]?.name || '',
        surname: formData.customers[i]?.surname || '',
        email: formData.customers[i]?.email || '',
        phone: formData.customers[i]?.phone || ''
      });
    }
    
    setFormData({ ...formData, numberPeople: value, customers: newCustomers });
  };

  return (
    <form
      className="booking-form"
      name="roomio-reservas"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
  	<input type="hidden" name="form-name" value="roomio-reservas" />
  	<input type="hidden" name="redirect" value="/" />
  	<p hidden>
  	  <label>
  		No llenar: <input name="bot-field" onChange={() => {}} />
  	  </label>
  	</p>

      <fieldset>
        <legend>Tipo de Alojamiento</legend>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="accommodation"
              value="hotel"
              checked={formData.accommodation === 'hotel'}
              onChange={(e) => handleInputChange('accommodation', e.target.value)}
              required
            />
            Hotel
          </label>
          <label>
            <input
              type="radio"
              name="accommodation"
              value="casa_rural"
              checked={formData.accommodation === 'casa_rural'}
              onChange={(e) => handleInputChange('accommodation', e.target.value)}
            />
            Casa Rural
          </label>
          <label>
            <input
              type="radio"
              name="accommodation"
              value="bungalow"
              checked={formData.accommodation === 'bungalow'}
              onChange={(e) => handleInputChange('accommodation', e.target.value)}
            />
            Bungalow
          </label>
          <label>
            <input
              type="radio"
              name="accommodation"
              value="camping"
              checked={formData.accommodation === 'camping'}
              onChange={(e) => handleInputChange('accommodation', e.target.value)}
            />
            Camping
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Número de Personas</legend>
        <select
          value={formData.numberPeople}
          onChange={(e) => handleNumberPeopleChange(e.target.value)}
          required
          name="numberPeople"
        >
          <option value="">Selecciona el número de personas</option>
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
          <option value="4">4 personas</option>
        </select>
      </fieldset>

      {formData.numberPeople && (
        <fieldset>
          <legend>Datos de los Clientes</legend>
          {formData.customers.map((_, index) => renderCustomerFields(index))}
        </fieldset>
      )}

      <fieldset>
        <legend>Disponibilidad</legend>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Fecha de inicio:</label>
            <input
              type="date"
              id="startDate"
              value={formData.startDate}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              required
              name="startDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">Fecha de fin:</label>
            <input
              type="date"
              id="endDate"
              value={formData.endDate}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              required
              name="endDate"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Comentarios</legend>
        <textarea
          value={formData.comments}
          onChange={(e) => handleInputChange('comments', e.target.value)}
          rows="4"
          cols="50"
          placeholder="Escribe tus comentarios aquí..."
          name="comments"
        />
      </fieldset>

      <button type="submit" className="btn btn-primary submit-btn">
        Enviar Formulario
      </button>
    </form>
  );
};

export default BookingForm;

