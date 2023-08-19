import type Mail from 'nodemailer/lib/mailer'
import { type IMailProvider, type IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'

export class MailTrapMailProvider implements IMailProvider {
  private readonly transporter: Mail

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '9e67c1e2bb333d',
        pass: 'ed9258c53a6abe'
      }
    })
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
