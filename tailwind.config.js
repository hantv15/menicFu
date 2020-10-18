module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      spacing: {
        '49': '13rem',
        '50': '14rem',
      },
      inset: {
        '1/2': '50%'
      }
    },

  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover', 'motion-safe'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
    overflow: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
