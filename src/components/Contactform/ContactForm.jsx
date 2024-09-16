
import React, { useState } from 'react';
import {Input,Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
const ContactForm = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica para enviar o formulário
        console.log('Form data:', formData);
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
            <h1 className="mb-8 text-3xl font-bold leading-tight"> CONTACT ME</h1>
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
                    <label htmlFor="email" className="block  font-medium mb-2">E-mail:</label>
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
                    <label htmlFor="text" className="block  font-medium mb-2">Subject:</label>

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
                    <label htmlFor="message" className="block  font-medium mb-2">Mensagem:</label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                    ></Textarea>
                </div>
                <Button
                    type="submit"
                    variant="light"
                    className="w-full py-2 px-4  font-semibold rounded-md hover:"
                >
                    Enviar
                </Button>
            </form>
        </section>
    );
};

export default ContactForm;