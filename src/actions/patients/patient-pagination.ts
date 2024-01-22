import prisma from '../../lib/prisma';

export const getPaginatedPatients = async () => {
  try {
    const patient = await prisma.patient.findMany({});

    return patient;
  } catch (error) {
    console.log(error);
    throw new Error('No se pudo obtener los pacientes');
  }
};
