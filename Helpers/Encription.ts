import * as CryptoJS from 'crypto-js';

/**
 * This function decrypts a given value using AES encryption.
   - It takes the encrypted value as input.
   - It decrypts the value using the `CryptoJS.AES.decrypt` method, 
     passing the value and the encryption secret (retrieved from the .env file `SECRET` environment variable).

 * @param value encrypted text.
 * @returns string converted using UTF-8 encoding.
 */
export async function aesDecrypt(value: string): Promise<string> {
  return CryptoJS.AES.decrypt(value, process.env.SECRET).toString(
    CryptoJS.enc.Utf8
  );
}

/**
 * This function encrypts a given value using AES encryption.
    - It takes the value to encrypt as input.
    - It encrypts the value using the `CryptoJS.AES.encrypt` method, 
      passing the value and the encryption secret (retrieved from the .env file `SECRET` environment variable).
    - The encrypted value is then converted to a string representation and returned.

 * @param value value to encrypt.
 * @returns converted to a string encrypted representation.
 */
export async function aesEncrypt(value: string): Promise<string> {
  return CryptoJS.AES.encrypt(value, process.env.SECRET).toString();
}

/**
This code provides two asynchronous functions for AES encryption and decryption using the `crypto-js` library.

Both functions return promises that resolve to the encrypted or decrypted value. 
They rely on an encryption secret stored in the .env file `SECRET` environment variable to perform 
the encryption and decryption operations.
*/
