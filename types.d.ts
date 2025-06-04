declare module "uk-modulus-checking" {
  interface ModulusCheckingOptions {
    accountNumber: string;
    sortCode: string;
  }

  class UkModulusChecking {
    constructor(options: ModulusCheckingOptions);
    isValid(): boolean;
  }

  export default UkModulusChecking;
}
