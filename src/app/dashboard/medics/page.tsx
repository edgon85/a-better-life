import { getPaginatedMedics } from '@/actions';
import { Search, TableMedics } from '@/components';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function MedicPage() {
  const medics = await getPaginatedMedics();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Medicos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar medico..." />
        <Link
          href="/dashboard/medics/create"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Crear medico</span>{' '}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
      </div>
      <TableMedics medics={medics} />
    </div>
  );
}
