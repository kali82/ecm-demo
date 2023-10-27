export interface ChangeRequest {
  mcrId: string;
  title: string;
  productDescription: string;
  status: string;
  createdBy: string;
  dateCreated: Date;
  lastChangedBy: string;
  lastChangedOn: Date;
}
export function createChangeRequest(
  data?: Partial<ChangeRequest>
): ChangeRequest {
  const defaults: ChangeRequest = {
    mcrId: 'test',
    title: '',
    productDescription: '',
    status: '',
    createdBy: '',
    dateCreated: new Date(),
    lastChangedBy: '',
    lastChangedOn: new Date(),
    ...data // Uzupełnienie wartości podanymi danymi, jeśli są dostępne
  };
  return { ...defaults };
}
