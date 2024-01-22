'use server';

import { revalidatePath } from 'next/cache';
import { Gender, MaritalStatus, Patient } from '@prisma/client';
import { z } from 'zod';
import prisma from '../../lib/prisma';

const patientSchema = z.object({
  name: z.string().min(3).max(255),
  lastName: z.string().min(3).max(255),
  gender: z.nativeEnum(Gender),
  birthDate: z.coerce.date(),
  dpi: z.string().max(13),
  phone: z.string().max(8),
  address: z.string(),
  community: z.string(),
  state: z.nativeEnum(MaritalStatus),
});

export const createPatient = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const patientParsed = patientSchema.safeParse(data);

  if (!patientParsed.success) {
    console.log(patientParsed.error);
    return {
      ok: false,
      message: '',
    };
  }

  const dataToCreate = patientParsed.data;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let patient: Patient;

      patient = await prisma.patient.create({
        data: {
          ...dataToCreate,
        },
      });

      return {
        patient,
      };
    });

    revalidatePath('/admin/products');
    return {
      ok: true,
      data: prismaTx.patient,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear',
    };
  }
};
