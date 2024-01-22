'use server';

import { revalidatePath } from 'next/cache';
import { Doctor } from '@prisma/client';
import { z } from 'zod';
import prisma from '../../lib/prisma';

const medicSchema = z.object({
  name: z.string().min(3).max(255),
  lastName: z.string().min(3).max(255),
  specialty: z.string(),
  email: z.string().email(),
  phone: z.string().max(8),
});

export const createMedic = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const medicParsed = medicSchema.safeParse(data);

  if (!medicParsed.success) {
    console.log(medicParsed.error);
    return {
      ok: false,
      message: '',
    };
  }

  const dataToCreate = medicParsed.data;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let medic: Doctor;

      medic = await prisma.doctor.create({
        data: {
          ...dataToCreate,
        },
      });

      return {
        medic,
      };
    });

    revalidatePath('/dashboard/medics');
    return {
      ok: true,
      data: prismaTx.medic,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear',
    };
  }
};
