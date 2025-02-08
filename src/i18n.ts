import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: {
        welcome: 'Welcome to AgriAdvisor',
        subtitle: 'Your AI-powered farming companion',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        login: 'Log In',
        signup: 'Sign Up',
        loggingIn: 'Logging in...',
        signingUp: 'Signing up...',
        needAccount: 'Need an account? Sign up',
        haveAccount: 'Already have an account? Log in'
      }
    }
  },
  hi: {
    translation: {
      login: {
        welcome: 'एग्रीएडवाइजर में आपका स्वागत है',
        subtitle: 'आपका AI-संचालित कृषि साथी',
        email: 'ईमेल पता',
        emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
        password: 'पासवर्ड',
        passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
        login: 'लॉग इन करें',
        signup: 'साइन अप करें',
        loggingIn: 'लॉग इन हो रहा है...',
        signingUp: 'साइन अप हो रहा है...',
        needAccount: 'खाता नहीं है? साइन अप करें',
        haveAccount: 'पहले से खाता है? लॉग इन करें'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;