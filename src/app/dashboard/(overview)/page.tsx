import { Card } from '@/components/dashboard/cards';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Suspense fallback={<CardsSkeleton />}> */}
        <Card title="Pacientes" value={45} type="collected" />
        <Card title="medicos" value={8} type="collected" />
        <Card title="Clínicas" value={3} type="collected" />
        <Card title="Citas" value={15} type="collected" />
        {/* </Suspense> */}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Suspense fallback={<CardsSkeleton />}> */}
        {/* </Suspense> */}
      </div>
    
    </main>
  );
}
