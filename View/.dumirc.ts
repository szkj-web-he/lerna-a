import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  autoAlias: false,
  alias: {
    '@Button': join(__dirname, '../packages/Button/src/index.tsx'),
    '@Display': join(__dirname, '../packages/Display/src/index.tsx'),
  },
  themeConfig: {
    name: '组件库',
  },
});
