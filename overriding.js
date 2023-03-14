class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
   
  class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
      super(sender);
      this.isBusiness = isBusiness;
    }
   
    // Overriding method
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }
  }
   
   
  const mailService = new MailService('someSender');
  const whatsappService = new WhatsAppService('+6281234567890', true);