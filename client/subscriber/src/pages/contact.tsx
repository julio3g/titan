import Head from 'next/head';
import { useState } from 'react';
import { Title } from '../components/Title';
import styles from '../styles/pages/contact.module.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <Head>
        <title>Entre em Contato · Museu Regional de Esportes</title>
        <meta
          name="description"
          content="Blog de notícias do esporte para manter a memória viva do esporte amador de
          Fraiburgo e região."
        />
        <meta
          name="title"
          content="Entre em Contato · Museu Regional de Esportes"
        />
      </Head>
      <main>
        <div className="container content">
          <Title
            title="Entre em Contato"
            description="geralmente respondemos em até 24h"
          />
          <div className={styles.contact}>
            <form
              action=""
              className={styles.form}
              onClick={(e) => handleSubmit(e)}
            >
              <div className={styles.wrapper}>
                <label htmlFor="name" className={styles.label}>
                  Nome Completo <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className={styles.input}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.wrapper}>
                <label htmlFor="email" className={styles.label}>
                  E-mail <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className={styles.input}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.wrapperTextarea}>
                <label htmlFor="message" className={styles.label}>
                  Mensagem <span>*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className={styles.textarea}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
