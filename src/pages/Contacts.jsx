// src/pages/Contacts.js
import { useTranslation } from '../TranslationContext';
import { handleFormSubmit } from '../components/FormHandler';

function Contacts() {
  const { translations } = useTranslation();
  const { name, surname, phone, submit } = translations.contacts || {};

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder={name} required />
      <input type="text" placeholder={surname} required />
      <input type="tel" placeholder={phone} required />
      <button type="submit">{submit}</button>
    </form>
  );
}

export default Contacts;
