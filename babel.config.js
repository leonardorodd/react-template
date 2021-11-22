module.exports = {
  presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {
          runtime: 'automatic' 
          /*A partir da versão 17 do React não é necessário importa-lo em arquivos 
           que usam a sintaxe JSX */
      }]
  ],  
};

