// // @ts-check
// import withNuxt from './.nuxt/eslint.config.mjs'
//
// export default withNuxt(
//   // Your custom configs here
// )

import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 2, // 4 or 'tab'
      quotes: 'single',
      // ... and more
    },
  },
})
