'use client';
import { ChangeEvent, useState } from 'react';

export const DatePicker = () => {
  // Estado para rastrear la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Manejar cambios en el input de fecha
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);

    console.log(event.target.value);
  };
  return (
    <fieldset className="mb-2 flex-1">
      <legend className="mb-2 block text-sm font-medium">
        Fecha de nacimiento
      </legend>
      <div className="rounded-md border border-gray-200 bg-white ">
        <input
          type="date"
          id="date-picker"
          name="date-picker"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full mt-1 border-none rounded-md cursor-pointer py-2 outline-none"
        />
      </div>
    </fieldset>
  );
};
