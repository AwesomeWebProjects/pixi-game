/* eslint-disable camelcase */
import i18next from 'i18next'

/**
 * Brazilian files
 */
import common_br from './languages/br/common.json'
import validation_br from './languages/br/validation.json'
import translation_br from './languages/br/translation.json'
/**
 * English files
 */
import common_en from './languages/en/common.json'
import validation_en from './languages/en/validation.json'
import translation_en from './languages/en/translation.json'

/**
 * Initialize i18n library
 */
i18next.init({
  /**
   * Default language
   */
  lng: 'br',
  /**
   * This enables a log with the i18next instance
   * When load app and initialize i18next
   */
  debug: process.env.NODE_ENV === 'development',
  /**
   * Mapped namespaces
   */
  ns: ['common', 'validation', 'translation'],
  /**
   * Default namespace
   */
  defaultNS: 'translation',
  /**
   * Translate resources
   */
  resources: {
    /**
     * Português - Brasil
     */
    br: {
      /**
       * Things that are reused everywhere, like "Confirm" and "Cancel" on buttons
       */
      common: common_br,
      /**
       * All validation text, like "email address not valid" in a form
       */
      validation: validation_br,
      /**
       * Other Words we want to be reused consistently, like key words in your app
       */
      translation: translation_br,
    },
    /**
     * English - USA
     */
    en: {
      /**
       * Things that are reused everywhere, like "Confirm" and "Cancel" on buttons
       */
      common: common_en,
      /**
       * All validation text, like "email address not valid" in a form
       */
      validation: validation_en,
      /**
       * Other Words we want to be reused consistently, like key words in your app
       */
      translation: translation_en,
    },
  },
})
