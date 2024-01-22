'use server';

import prisma from '@/lib/prisma';

export const getPatientById = async (id: string) => {
  try {
    const patient = await prisma.patient.findFirst({
      where: { id },
    });

    if (!patient) return null;

    return patient;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }
};
