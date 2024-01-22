export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'es-GT'
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export function translateGender(genero: string) {
  switch (genero.toLowerCase()) {
    case 'men':
      return 'Hombre';
    case 'women':
      return 'Mujer';
    default:
      return 'Desconocido';
  }
}

export function translateMarital(state: string) {
  switch (state.toLowerCase()) {
    case 'single':
      return 'Soltero';
    case 'married':
      return 'Casado';
    default:
      return 'Desconocido';
  }
}
