
import nodemailer from "nodemailer";

import type { Attachment } from "nodemailer/lib/mailer";

/**
 * Mail Options
 *
 * @param host - The host default env SMTP_HOST
 * @param port - The port default env SMTP_PORT
 * @param user - The user default env SMTP_USER
 * @param pass - The pass default env SMTP_PASS
 * @param from - The from default env EMAIL_FROM
 */
interface MailOptions {
  host?: string;
  port?: number;
  user?: string;
  pass?: string;
  from?: string;
  secure: boolean;
}

class MailService {
  private transporter: nodemailer.Transporter;

  constructor(options: MailOptions) {
    this.transporter = nodemailer.createTransport({
      host: options.host || process.env.SMTP_HOST,
      port: options.port || parseInt(process.env.SMTP_PORT!),
      secure: options.secure,
      auth: {
        user: options.user || process.env.SMTP_USER,
        pass: options.pass || process.env.SMTP_PASS,
      },
      greetingTimeout: 10000,
      connectionTimeout: 10000,
      socketTimeout: 10000,
    });
  }

  public async sendEmail(
    from: string,
    to: string | string[],
    subject: string,
    html: string,
    attachments: Attachment[] = [],
  ): Promise<void> {
    try {
      console.debug(`Sending email ${from} ${to} ${subject}`);
      // if (process.env.NODE_ENV !== "production") return;
      const mailOptions: nodemailer.SendMailOptions = {
        from,
        to: Array.isArray(to) ? to.join(",") : to,
        subject,
        html,
        attachments,
      };
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error), "MailService");
    }
  }
}

export { MailService };
export type { MailOptions };