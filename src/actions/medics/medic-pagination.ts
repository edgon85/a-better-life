import prisma from '../../lib/prisma';

export const getPaginatedMedics = async () => {
  try {
    const medics = await prisma.doctor.findMany({});

    console.log(medics);
    return medics;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo obtener los pacientes');
  }
};
