import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const enviarEmailBoasVindas = async (destinatario, nome) => {
  try {
    await transporter.sendMail({
      from: `"Equipe DNC 👩‍💻" <${process.env.EMAIL_USER}>`,
      to: destinatario,
      subject: "🎉 Bem-vindo à Gestão de Colaboradores!",
      html: `
        <h2>Olá, ${nome}!</h2>
        <p>Seu cadastro foi realizado com sucesso na plataforma de Gestão de Colaboradores DNC 🚀</p>
        <p>Agora você já pode acessar o sistema e aproveitar todos os recursos disponíveis.</p>
        <br/>
        <p>Atenciosamente,</p>
        <strong>Equipe DNC Tech</strong>
      `,
    });

    console.log(`📧 Email de boas-vindas enviado para ${destinatario}`);
  } catch (error) {
    console.error("❌ Erro ao enviar email:", error.message);
  }
};