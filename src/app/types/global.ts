export interface MailRequestBody {
  fullname: string;
  phoneNumber: string;
  email: string;
  country: string;
  location: string;
  message: string;
  subject: string;
}

export interface ServiceType {
  id: string;
  name: string;
  title: string;
  description: string;
}
