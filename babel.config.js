module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["/"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@*": "./src/*",
            "@components": "./src/components/index",
            "@utils": "./src/utils",
            "@redux": "./src/redux",
            "@images": "./src/assets/images",
            // "@icons": "./src/assets/icons/index",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
