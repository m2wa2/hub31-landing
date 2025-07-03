import React from 'react';

export default function Landing() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <img src="/hub31-logo.png" alt="Hub31 Logo" style={{ height: 100 }} />
      <h1 style={{ color: '#228B22', fontSize: '2rem', marginTop: '1rem' }}>Launch. Automate. Dominate.</h1>
      <p style={{ margin: '1rem auto', maxWidth: 600 }}>
        Hub31 helps you automate your business hustle with AI Agents. Now accepting project setups via WhatsApp & Telegram.
      </p>
      <a href="https://wa.me/254720860034" target="_blank">
        <button style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          margin: '0.5rem'
        }}>
          Start on WhatsApp
        </button>
      </a>
      <a href="https://t.me/Hub31AIBot" target="_blank">
        <button style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0088cc',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          margin: '0.5rem'
        }}>
          Launch via Telegram
        </button>
      </a>
      <div style={{ marginTop: '2rem' }}>
        <p>📌 Pay with M-Pesa Till Number <strong>882632</strong></p>
        <a href="https://forms.gle/h1ogqTrm2ZMVLFEw6" target="_blank">
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#FFD700',
            color: '#333',
            border: 'none',
            fontWeight: 'bold'
          }}>
            Fill Launch Form
          </button>
        </a>
      </div>
    </div>
  );
}
