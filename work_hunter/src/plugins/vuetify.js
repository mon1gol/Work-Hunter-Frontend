/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes:{
      light:{
        colors:{
          primary: '#FFFFFF',
          secondary: '#4E598C',
          accent: '#F9C784',
          error: '#FF0000',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFEB3B',
        },
      },
      dark:{
        colors:{
          primary: '#4E598C',
          secondary: '#6F7BAE',
          accent: '#F9C784',
          error: '#FF0000',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFEB3B',
        },
      },
    },
  },
})
