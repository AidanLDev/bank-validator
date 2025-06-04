declare module "uk-modulus-checking" {
  interface ModulusCheckingOptions {
    accountNumber: string;
    sortCode: string;
  }

  export class UkModulusChecking {
    constructor(options: ModulusCheckingOptions);
    isValid(): boolean;
  }
}
