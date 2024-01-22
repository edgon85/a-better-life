import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PatientDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="py-2 px-2 bg-gray-200 w-full">
        <p className="text-center">Datos personales</p>
      </div>
      <div className="flex">
        <div className="w-80">
          <p className="p-2 bg-gray-200">nombre</p>
          <p className="p-2 bg-gray-200">Comunidad</p>
          <p className="p-2 bg-gray-200">Teléfono</p>
          <p className="p-2 bg-gray-200">Genero</p>
          <p className="p-2 bg-gray-200">Estado</p>
          <p className="p-2 bg-gray-200">Fecha de nacimiento</p>
        </div>
        <div className="w-full">
          <p className="p-2 w-full bg-gray-100">Edwin</p>
          <p className="p-2 w-full ">San Francisco</p>
          <p className="p-2 w-full bg-gray-100">54587458</p>
          <p className="p-2 w-full bg-gray">Maculino</p>
          <p className="p-2 w-full bg-gray-100">Soltero</p>
          <p className="p-2 w-full bg-gray">12 jun 4587</p>
        </div>
      </div>

      <div className=" mt-4">
        <h3>Historial medico</h3>
        <div className="mt-6 flow-root">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {[10].map((patient, index) => (
                  <div
                    key={index}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <p>Clinica 1</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          Medico: Perci Jacxon
                        </p>
                      </div>
                      {/* <InvoiceStatus status={invoice.status} /> */}
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div>
                        <p>23/11/2023</p>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/patients/dd/detail`}>
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
                      Clinica
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Medico
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Fecha
                    </th>

                    <th scope="col" className="relative py-3 pl-6 pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[1, 2, 3].map((patient, index) => (
                    <tr
                      key={index}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <p>Clinica {index + 1}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        Carlos Sagastume
                      </td>

                      <td className="whitespace-nowrap px-3 py-3">
                        23/11/2023{' '}
                      </td>
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <ArrowRightCircleIcon className="w-8"/>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
