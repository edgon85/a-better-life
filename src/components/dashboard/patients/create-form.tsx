import Link from 'next/link';
import { DatePicker } from './DatePicker';
import { GenderSelect } from './GenderSelect';
import { Button } from '@/components';

export const CreateForm = () => {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Nombres
            </label>
            <input
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Apellidos
            </label>
            <input
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <GenderSelect />
          <DatePicker />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              DPI
            </label>
            <input
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Teléfono
            </label>
            <input
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Comunidad
            </label>
            <input
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Estado civil
            </label>
            <select
              id="customer"
              name="customerId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-roledescription="customer-error"
            >
              <option value="" disabled>
                - Seleccione -
              </option>

              <option value="single">Soltero</option>
              <option value="married">Casado</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/patients"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Crear paciente</Button>
      </div>
    </form>
  );
};
