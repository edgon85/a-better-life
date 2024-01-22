import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from './create-form';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};
export const GenderSelect = ({ register, errors }: Props) => {
  return (
    <fieldset className="mb-2 flex-1">
      <legend className="mb-2 block text-sm font-medium">Genero</legend>
      <div className="rounded-md border border-gray-200 bg-white px-[14px] py-2">
        <div className="flex gap-4">
          <div className="flex items-center">
            <input
              id="men"
              type="radio"
              value="men"
              aria-describedby="customer-error"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 "
              {...register('gender', { required: 'Este campo es requerido' })}
            />
            <label
              htmlFor="men"
              className="ml-2 flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 "
            >
              Masculino{/*  <ClockIcon className="h-4 w-4" /> */}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="women"
              type="radio"
              value="women"
              aria-describedby="customer-error"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 "
              {...register('gender', { required: 'Este campo es requerido' })}
            />
            <label
              htmlFor="women"
              className="ml-2 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white "
            >
              Femenino {/* <CheckIcon className="h-4 w-4" /> */}
            </label>
          </div>
        </div>
      </div>
      {errors.gender && (
        <span className="text-xs text-red-500">*{errors.gender?.message}</span>
      )}
    </fieldset>
  );
};
