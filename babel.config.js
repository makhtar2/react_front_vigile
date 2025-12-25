module.exports = function (
  /** @type {{ cache: (arg0: boolean) => void }} */ api
) {
  /** @type {{ cache: (arg0: boolean) => void }} */
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
