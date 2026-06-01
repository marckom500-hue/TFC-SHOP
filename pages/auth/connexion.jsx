import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import styles from './auth.module.css';

export default function ConnexionPage() {
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', name: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <Layout>
      <Head><title>{tab === 'login' ? 'Se connecter' : "S'inscrire"} — TFC SHOP</title></Head>
      <div className={styles.page}>
        <div className={styles.card}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>TFC</div>
            <div>
              <div className={styles.logoText}>TFC <span>SHOP</span></div>
              <div className={styles.logoSub}>Cameroun officiel</div>
            </div>
          </div>
          <div className={styles.tabs}>
            <button className={tab === 'login' ? styles.activeTab : ''} onClick={() => setTab('login')}>Se connecter</button>
            <button className={tab === 'register' ? styles.activeTab : ''} onClick={() => setTab('register')}>S'inscrire</button>
          </div>
          {tab === 'login' ? (
            <div className={styles.form}>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" name="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className={styles.field}>
                <label>Mot de passe</label>
                <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} />
              </div>
              <a href="#" className={styles.forgot}>Mot de passe oublié ?</a>
              <button className={styles.btnSubmit}>Se connecter</button>
            </div>
          ) : (
            <div className={styles.form}>
              <div className={styles.field}>
                <label>Nom complet</label>
                <input type="text" name="name" placeholder="Jean Dupont" value={form.name} onChange={handleChange} />
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" name="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className={styles.field}>
                <label>Mot de passe</label>
                <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} />
              </div>
              <button className={styles.btnSubmit}>Créer mon compte</button>
            </div>
          )}
          <p className={styles.backHome}><Link href="/">← Retour à l'accueil</Link></p>
        </div>
      </div>
    </Layout>
  );
}
