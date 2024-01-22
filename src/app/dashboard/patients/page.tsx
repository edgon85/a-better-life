import { getPaginatedPatients } from '@/actions';
import { Search, TablePatients } from '@/components';
import { IPatient } from '@/interfaces';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function PatientPage() {
  const patients = (await getPaginatedPatients()) as IPatient[];

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Pacientes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar paciente..." />
        <Link
          href="/dashboard/patients/create"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Crear paciente</span>{' '}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
      </div>
      <TablePatients patients={patients} />
    </div>
  );
}
