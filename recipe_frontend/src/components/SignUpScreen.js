import React, { useState } from 'react';
import styles from '../styles/SignUpScreen.module.css';
import common from '../styles/common.module.css';

/**
 * PUBLIC_INTERFACE
 * Sign Up screen: registration UI, styled per Figma asset. No backend.
 */
function SignUpScreen() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', terms: false });

  const handleChange = e =>
    setForm({
      ...form,
      [e.target.name]: (e.target.type === 'checkbox' ? e.target.checked : e.target.value),
    });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.terms) {
      return alert('Must accept terms');
    }
    alert(`Mock SignUp: ${form.name}, ${form.email}`);
  };

  return (
    <main className={`${common.screen} ${styles.signup}`} role="main" aria-label="Sign up screen">
      <h1 className={styles.title}>Create an account</h1>
      <p className={styles.subtitle}>
        Let’s help you set up your account, it won’t take long.
      </p>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.inputField}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter Name" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter Email" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter Password" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="confirm">Confirm Password</label>
          <input id="confirm" name="confirm" type="password" value={form.confirm} onChange={handleChange} placeholder="Retype Password" />
        </div>
        <div className={styles.acceptTerms}>
          <input type="checkbox" id="terms" name="terms" checked={form.terms} onChange={handleChange} />
          <label htmlFor="terms" className={styles.termsLabel}>
            Accept terms &amp; Condition
          </label>
        </div>
        <button className={styles.primaryBtn} type="submit">
          <span>Sign Up</span>
        </button>
      </form>
      <div className={styles.socialDivider}>
        <div className={styles.line}></div>
        <span className={styles.caption}>Or Sign in With</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.socialBtns}>
        <button type="button" className={`${styles.socialBtn} ${styles.google}`}>Google</button>
        <button type="button" className={`${styles.socialBtn} ${styles.facebook}`}>Facebook</button>
      </div>
      <p className={styles.already}>Already a member? Sign In</p>
    </main>
  );
}

export default SignUpScreen;
