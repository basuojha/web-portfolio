module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        // 'modules: "auto"' is usually a safe choice here
        modules: "auto",
      },
    ],
    "@babel/preset-react",
  ],
};
