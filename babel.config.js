module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      // Path Mapping
      [
        "module-resolver",
        {
          root: ["./src"],
          extendions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
