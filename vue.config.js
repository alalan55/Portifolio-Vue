module.exports = {
    css: {
      loaderOptions: {
        scss: {
            prependData: `@import "~@/style/variables/_variables.scss";`
        }
      }
    }
  };