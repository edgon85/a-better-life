export interface IPatient {
  id: string;
  name: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  dpi: string;
  phone: string;
  address: string;
  community: string;
  image: String;
  state: String;
  createdAt?: Date;
  updatedAt?: Date;
}
