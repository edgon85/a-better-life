import { ChangeEvent, useState } from 'react';
import { FormInputs } from './create-form';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export const DatePicker = ({ register, errors }: Props) => {
  // Estado para rastrear la fecha seleccionada
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Manejar cambios en el input de fecha
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSelectedDate(event.target.value);
  return (
    <fieldset className="mb-2 flex-1">
      <legend className="mb-2 block text-sm font-medium">
        Fecha de nacimiento
      </legend>
      <div className="rounded-md border border-gray-200 bg-white ">
        <input
          type="date"
          id="date-picker"
          value={selectedDate}
          className="w-full mt-1 border-none rounded-md cursor-pointer py-2 outline-none"
          {...register('birthDate', { required: 'este campo es requerido' })}
          onChange={handleDateChange}
        />
      </div>
      {errors.birthDate && (
        <span className="text-xs text-red-500">
          *{errors.birthDate.message}
        </span>
      )}
    </fieldset>
  );
};
