import React, { useState } from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.email || !formData.message) {
            setLoading(false);
            return;
        }

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            };

            await emailjs
                .send(
                    "service_7vjxm69", // Substitua pelo seu Service ID
                    "template_0nmmvrl", // Substitua pelo seu Template ID
                    templateParams,
                    "KqZmjsgmnHPNkeHHi" // Substitua pelo seu User ID
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Email enviado com sucesso!");
                        setFormData({ name: '', email: '', subject: '', message: '' }); // Limpar o formulário após o envio
                    },
                    (error) => {
                        console.log(error.text);
                        alert("Erro ao enviar o email.");
                    }
                );

        } catch (error) {
            alert("Oops! Algo deu errado. Tente novamente mais tarde.");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
            <h1 className="mb-8 text-3xl font-bold leading-tight">CONTATO</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium mb-2">Nome:</label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium mb-2">E-mail:</label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block font-medium mb-2">Assunto:</label>
                    <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium mb-2">Mensagem:</label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                    />
                </div>
                <Button
                    type="submit"
                    variant="light"
                    className="w-full py-2 px-4 font-semibold rounded-md"
                    disabled={loading} // Desabilita o botão enquanto o envio está acontecendo
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </Button>
            </form>
        </section>
    );
};

export default ContactForm;
