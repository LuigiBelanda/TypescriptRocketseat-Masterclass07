interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // aqui dizemos que teremos um array de strings - ? dado opcional
  // attachment?: Array<string> // aqui é a mesma coisa da linha acima
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(
      `Email enviado para ${to.name}: ${message.subject}, ${message.body}`
    );
  }
}

export default EmailService;
