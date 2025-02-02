// src/pages/Login.js
import { useTranslation } from '../TranslationContext';
import { handleFormSubmit } from '../components/FormHandler';

function Login() {
  const { translations } = useTranslation();
  const { email, password, submit } = translations.login || {};

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="email" placeholder={email} required />
      <input type="password" placeholder={password} required />
      <button type="submit">{submit}</button>
    </form>
  );
}

export default Login;
