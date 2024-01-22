'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { DatePicker } from './DatePicker';
import { GenderSelect } from './GenderSelect';
import { Button } from '@/components';
import { createPatient } from '@/actions';

import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export type FormInputs = {
  name: string;
  lastName: string;
  gender: string;
  birthDate: string;
  dpi?: string;
  phone: string;
  address: string;
  community: string;
  state: string;

  images?: FileList;
};

export const CreateForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    watch,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    if (!isValid) return;

    const formData = new FormData();

    const { ...patientToSave } = data;

    formData.append('name', patientToSave.name);
    formData.append('lastName', patientToSave.lastName);
    formData.append('gender', patientToSave.gender);
    formData.append('birthDate', patientToSave.birthDate);
    formData.append('dpi', patientToSave.dpi ?? '');
    formData.append('phone', patientToSave.phone);
    formData.append('address', patientToSave.address ?? '');
    formData.append('community', patientToSave.community);
    formData.append('state', patientToSave.state);

    const { ok } = await createPatient(formData);

    Swal.fire({
      title: '¿Estás seguro?',
      html: `Se va a crear un nuevo paciente`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, crear',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,

      preConfirm: async () => {
        const { ok, message, data } = await createPatient(formData);
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
          title: 'Paciente creado',
          icon: 'success',
        });

        router.replace(`/dashboard/patients`);
      }
    });
  };

  watch('birthDate');
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

        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <GenderSelect register={register} errors={errors} />
          <DatePicker register={register} errors={errors} />
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
              type="number"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              placeholder="CUI"
              {...register('dpi', {
                pattern: {
                  value: /^\d{13}$/,
                  message: 'El CUI debe tener 13 dígitos.',
                },
              })}
            />
            {errors.dpi && (
              <span className="text-xs text-red-500">
                *{errors.dpi.message}
              </span>
            )}
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
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Estado civil
            </label>
            <select
              id="customer"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-roledescription="customer-error"
              {...register('state', { required: 'Este campo es requerido' })}
            >
              <option value="" disabled>
                - Seleccione -
              </option>

              <option value="single">Soltero</option>
              <option value="married">Casado</option>
            </select>
            {errors.state && (
              <span className="text-xs text-red-500">
                *{errors.state.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Dirección
            </label>
            <input
              type="text"
              placeholder="Dirección"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              {...register('address')}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Comunidad
            </label>
            <input
              type="text"
              placeholder="Comunidad"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              {...register('community', {
                required: 'Este campo es requerido',
              })}
            />
            {errors.community && (
              <span className="text-xs text-red-500">
                *{errors.community.message}
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
