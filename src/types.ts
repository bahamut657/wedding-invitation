export type RTSPValues = {
  partecipant: string;
  partecipant_number: string;
  additional_info: string
}

export type SendPayload = {
  name: string;
  subject: string;
  sender: {
    name: string;
    email: string;
  },
  type: "classic";
  htmlContent: string;
  to: {
    email: string;
    name: string;
  }[]
}
