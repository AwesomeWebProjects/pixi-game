/* eslint-disable camelcase */
import { createReducer } from '../create-reducer'

class Style {
  constructor() {
    /**
     * Input one color here and export as
     * react and refactor to be like the
     * color palletes used in our app.
     * The inputed color will be the
     * `0500` in the color pallete.
     * http://mcg.mbitson.com/
     */

    /**
     * Color: #FF6400
     */
    this.primaryColor = {
      /**
       * Orange
       */
      // 'color-primary-50': '#FFECE0',
      // 'color-primary-100': '#FFD1B3',
      // 'color-primary-200': '#FFB280',
      // 'color-primary-300': '#FF934D',
      // 'color-primary-400': '#FF7B26',
      // 'color-primary-500': '#FF6400',
      // 'color-primary-600': '#FF5C00',
      // 'color-primary-700': '#FF5200',
      // 'color-primary-800': '#FF4800',
      // 'color-primary-900': '#FF3600',
      // 'color-primary-A100': '#FFFFFF',
      // 'color-primary-A200': '#FFF4F2',
      // 'color-primary-A400': '#FFC9BF',
      // 'color-primary-A700': '#FFB3A6'

      /**
       * Blue
       */
      'color-primary-50': '#e0f3fc',
      'color-primary-100': '#b3e2f6',
      'color-primary-200': '#80cff1',
      'color-primary-300': '#4dbbeb',
      'color-primary-400': '#26ade6',
      'color-primary-500': '#009ee2',
      'color-primary-600': '#0096df',
      'color-primary-700': '#008cda',
      'color-primary-800': '#0082d6',
      'color-primary-900': '#0070cf',
      'color-primary-A100': '#f6fbff',
      'color-primary-A200': '#c3e0ff',
      'color-primary-A400': '#90c6ff',
      'color-primary-A700': '#77b9ff',
    }

    /**
     * Color: #EE1131
     */
    this.secondaryColor = {
      'color-secondary-50': '#FDE2E6',
      'color-secondary-100': '#FAB8C1',
      'color-secondary-200': '#F78898',
      'color-secondary-300': '#F3586F',
      'color-secondary-400': '#F13550',
      'color-secondary-500': '#EE1131',
      'color-secondary-600': '#EC0F2C',
      'color-secondary-700': '#E90C25',
      'color-secondary-800': '#E70A1F',
      'color-secondary-900': '#E20513',
      'color-secondary-A100': '#FFFFFF',
      'color-secondary-A200': '#FFD7D9',
      'color-secondary-A400': '#FFA4A7',
      'color-secondary-A700': '#FF8B8F',
    }

    /**
     * Colors
     */
    this.colors = {
      /* neutral */
      'color-neutral-50': '#f8f7f8',
      'color-neutral-100': '#f3f2f4',
      'color-neutral-200': '#e5e3e6',
      'color-neutral-300': '#ccc8cf',
      'color-neutral-400': '#b9b3bc',
      'color-neutral-500': '#a097a4',
      'color-neutral-600': '#7d7283',
      'color-neutral-700': '#6a5d70',
      'color-neutral-800': '#53445b',
      'color-neutral-900': '#19121c',
      'color-neutral-50-contrast': '#19121c',
      'color-neutral-100-contrast': '#19121c',
      'color-neutral-200-contrast': '#19121c',
      'color-neutral-300-contrast': '#19121c',
      'color-neutral-400-contrast': '#19121c',
      'color-neutral-500-contrast': '#19121c',
      'color-neutral-600-contrast': '#19121c',
      'color-neutral-700-contrast': '#fff',
      'color-neutral-800-contrast': '#fff',
      'color-neutral-900-contrast': '#fff',

      /* success */
      'color-success-100': '#f0fff5',
      'color-success-200': '#ccfce3',
      'color-success-300': '#8cfac7',
      'color-success-400': '#2ce69b',
      'color-success-500': '#00d68f',
      'color-success-600': '#00b887',
      'color-success-700': '#00997a',
      'color-success-800': '#007d6c',
      'color-success-900': '#004a42',
      'color-success-100-contrast': '#19121c',
      'color-success-200-contrast': '#19121c',
      'color-success-300-contrast': '#19121c',
      'color-success-400-contrast': '#19121c',
      'color-success-500-contrast': '#19121c',
      'color-success-600-contrast': '#19121c',
      'color-success-700-contrast': '#19121c',
      'color-success-800-contrast': '#fff',
      'color-success-900-contrast': '#fff',

      /* danger */
      'color-danger-100': '#f36e6e',
      'color-danger-200': '#f15454',
      'color-danger-300': '#ef3939',
      'color-danger-400': '#ed1f1f',
      'color-danger-500': '#dd1212',
      'color-danger-600': '#c21010',
      'color-danger-700': '#a80e0e',
      'color-danger-800': '#8d0c0c',
      'color-danger-900': '#730909',
      'color-danger-100-contrast': '#19121c',
      'color-danger-200-contrast': '#19121c',
      'color-danger-300-contrast': '#19121c',
      'color-danger-400-contrast': '#19121c',
      'color-danger-500-contrast': '#fff',
      'color-danger-600-contrast': '#fff',
      'color-danger-700-contrast': '#fff',
      'color-danger-800-contrast': '#fff',
      'color-danger-900-contrast': '#fff',

      /* warning */
      'color-warning-100': '#f5ce69',
      'color-warning-200': '#f4c651',
      'color-warning-300': '#f2be3a',
      'color-warning-400': '#f1b722',
      'color-warning-500': '#ebad0f',
      'color-warning-600': '#d39c0e',
      'color-warning-700': '#bc8a0c',
      'color-warning-800': '#a4790b',
      'color-warning-900': '#8d6809',
      'color-warning-100-contrast': '#19121c',
      'color-warning-200-contrast': '#19121c',
      'color-warning-300-contrast': '#19121c',
      'color-warning-400-contrast': '#19121c',
      'color-warning-500-contrast': '#19121c',
      'color-warning-600-contrast': '#19121c',
      'color-warning-700-contrast': '#19121c',
      'color-warning-800-contrast': '#19121c',
      'color-warning-900-contrast': '#fff',

      /* info */
      'color-info-100': '#f2f8ff',
      'color-info-200': '#c7e2ff',
      'color-info-300': '#94cbff',
      'color-info-400': '#42aaff',
      'color-info-500': '#0095ff',
      'color-info-600': '#006fd6',
      'color-info-700': '#0057c2',
      'color-info-800': '#0041a8',
      'color-info-900': '#002885',
      'color-info-200-contrast': '#19121c',
      'color-info-300-contrast': '#19121c',
      'color-info-400-contrast': '#19121c',
      'color-info-500-contrast': '#19121c',
      'color-info-600-contrast': '#fff',
      'color-info-700-contrast': '#fff',
      'color-info-800-contrast': '#fff',
      'color-info-900-contrast': '#fff',
    }

    /**
     * Linear Gradients
     */
    this.gradients = {
      // gradient1: 'linear-gradient(to right, #ff6f00, #ff9100)' // Orange
      gradient1: 'linear-gradient(to right, #009ee2, #4DBBEB)', // Blue
    }

    /**
     * Status Colors
     */
    this.status = {
      errorColor: '#FF0000', // Red
    }

    /**
     * Others
     */
    this.nprogress = '#FFFFFF' // This color need to have contrast with primary color

    this.tokens = {
      /* spacings */
      'spacing-squish-s': '4px 8px',
      'spacing-squish-m': '8px 12px',
      'spacing-squish-l': '12px 16px',
      'spacing-squish-xl': '12px 24px',
      'spacing-xxs': '4px',
      'spacing-s': '8px',
      'spacing-sm': '12px',
      'spacing-m': '16px',
      'spacing-l': '24px',
      'spacing-xl': '32px',
      'spacing-xxl': '64px',

      /* outside shadow */
      'shadow-1': '0 4px 8px rgba(0, 0, 0, 0.15)',
      'shadow-2': '0 8px 24px rgba(0, 0, 0, 0.15)',
      'shadow-3': '0 16px 32px rgba(0, 0, 0, 0.15)',
      'shadow-4': '0 32px 64px rgba(0, 0, 0, 0.15)',

      /* icon sizes */
      'size-icon-xs': '16px',
      'size-icon-s': '20px',
      'size-icon-m': '24px',
      'size-icon-l': '32px',
      'size-icon-xl': '40px',

      /* fonts */
      'font-family': `'Montserrat', 'Arial', 'Helvetica', sans-serif`,

      /* font size */
      'font-size-xxs': '11px',
      'font-size-xs': '12px',
      'font-size-s': '14px',
      'font-size-m': '16px',
      'font-size-l': '19px',
      'font-size-xl': '28px',
      'font-size-xxl': '43px',
      'font-size-xxxl': '64px',

      /* font weight */
      'font-weight-regular': 400,
      'font-weight-medium': 500,
      'font-weight-semibold': 600,
      'font-weight-bold': 700,
      'font-weight-black': 900,

      /* border radius */
      'border-radius-s': '4px',
      'border-radius-m': '8px',
      'border-radius-l': '12px',
      'border-radius-xl': '16px',
      'border-radius-pill': '500px',
      'border-radius-circle': '50%',

      /* depths */
      'depth-base': 1,
    }
  }

  /**
   * This action need to be refactored
   * to update all levels dynamically
   */
  static UPDATE_STYLE(
    state,
    { primaryColor, secondaryColor, gradients, nprogress, status, colors, tokens } = {},
  ) {
    state = {
      ...state,
      primaryColor: {
        ...state.primaryColor,
        ...primaryColor,
      },
      secondaryColor: {
        ...state.secondaryColor,
        ...secondaryColor,
      },
      gradients: {
        ...state.gradients,
        ...gradients,
      },
      nprogress,
      status: {
        ...state.status,
        ...status,
      },
      colors: {
        ...state.colors,
        ...colors,
      },
      tokens: {
        ...state.tokens,
        ...tokens,
      },
    }

    return state
  }

  static LOAD_Style(state, payload = {}) {
    if ('id' in payload) {
      const { id, language } = payload
      return new Style({ id, language })
    }

    return state
  }

  static CLEAR_STYLE() {
    return new Style()
  }
}

export const styleReducer = createReducer(Style)
