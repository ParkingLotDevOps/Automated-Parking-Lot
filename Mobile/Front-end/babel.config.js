module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< Updated upstream
  };
};
=======
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
>>>>>>> Stashed changes
