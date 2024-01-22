import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function PatientDetail({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/patients/${id}/detail`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <ArrowRightCircleIcon className="w-5" />
    </Link>
  );
}
