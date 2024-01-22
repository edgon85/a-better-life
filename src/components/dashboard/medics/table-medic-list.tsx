import { IMedic } from '@/interfaces';
import { formatDateToLocal, translateGender } from '@/utils';

import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

type Props = {
  medics: IMedic[];
};

export const TableMedics = ({ medics }: Props) => {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {medics?.map((medic) => (
              <div
                key={medic.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>
                        {medic.name} {medic.lastName}
                      </p>
                    </div>

                    <p className="text-sm text-gray-500">{medic.specialty}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p>{formatDateToLocal(`${patient.birthDate}`)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2">
                    <Link href={`/dashboard/patients/${medic.id}/detail`}>
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre y apellido
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Especialidad
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Teléfono
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  email
                </th>

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {medics?.map((medic) => (
                <tr
                  key={medic.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>
                        {medic.name} {medic.lastName}
                      </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {medic.specialty}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{medic.phone}</td>

                  <td className="whitespace-nowrap px-3 py-3">{medic.email}</td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/dashboard/medics/${medic.id}/edit`}
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <ArrowRightCircleIcon className="w-5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
