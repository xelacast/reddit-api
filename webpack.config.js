[
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: /\.[jt]sx?$/,
    use: ['babel-loader', '@svgr/webpack', 'url-loader'],
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
  },
];
