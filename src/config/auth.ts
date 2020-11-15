export default {
  jwt: {
    /** Dizemos que o nosso 'secret' pode ser 'default', para fazer com que nossos teste
     * de 'AuthenticateUserService.spec.ts' passe */
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};
