import { override, addWebpackModuleRule } from 'customize-cra';

export default override(
  addWebpackModuleRule({
    test: /\.styl$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'stylus-loader' }
    ]
  })
);
