const options = {
    entry: 'src/index.js',
    doc: {
      title: 'JMD',
      themeConfig: { mode: 'light' },
    },
    extraBabelPlugins: [
      ['babel-plugin-import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }]
    ],
    cssModules: {
      generateScopedName: '[path][name]__[local]',
    },
    extractCSS: true,
    lessInBabelMode: true,
    runtimeHelpers: true,
    esm: 'babel',
    cjs: 'babel',
    autoprefixer: {
      browsers: ['ie>9', 'Safari >= 6'],
    }
  };
  
  export default options;