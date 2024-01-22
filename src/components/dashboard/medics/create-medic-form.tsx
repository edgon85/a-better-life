'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { Button } from '@/components';
import { createMedic } from '@/actions';

import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export type FormMedicInputs = {
  name: string;
  lastName: string;
  specialty: string;
  email: string;
  phone: string;
};

export const CreateMedicForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    watch,
  } = useForm<FormMedicInputs>();

  const onSubmit = async (data: FormMedicInputs) => {
    if (!isValid) return;

    const formData = new FormData();

    const { ...patientToSave } = data;

    formData.append('name', patientToSave.name);
    formData.append('lastName', patientToSave.lastName);

    formData.append('specialty', patientToSave.specialty ?? '');
    formData.append('email', patientToSave.email);
    formData.append('phone', patientToSave.phone);

    Swal.fire({
      title: '¿Estás seguro?',
      html: `Se va a crear un nuevo medico`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, crear',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,

      preConfirm: async () => {
        const { ok, message, data } = await createMedic(formData);
        if (!ok) {
          Swal.showValidationMessage(`error: ${message}`);
          return;
        }

        return data;
      },
      allowOutsideClick: () => {
        const popup = Swal.getPopup() as HTMLElement;
        popup.classList.remove('swal2-show');
        return !Swal.isLoading();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Medico creado',
          icon: 'success',
        });

        router.replace(`/dashboard/medics`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register('name', { required: 'Este campo es requerido' })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                *{errors.name.message}
              </span>
            )}
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
              {...register('lastName', { required: 'Este campo es requerido' })}
            />
            {errors.lastName && (
              <span className="text-xs text-red-500">
                *{errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        {/*  */}

        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Especialidad
            </label>
            <input
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Especialidad"
              {...register('specialty', {})}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              placeholder="name@gmail.com"
              {...register('email', {})}
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
              type="tel"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Ingrese 8 dígitos"
              {...register('phone', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^\d{8}$/,
                  message: 'Debe contener exactamente 8 dígitos.',
                },
              })}
            />
            {errors.phone && (
              <span className="text-xs text-red-500">
                *{errors.phone.message}
              </span>
            )}
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
