import CryptoJS from "crypto-js";

export const encrypt = (plainText) => {
    const ciphertext = CryptoJS.AES.encrypt(plainText, 'key123').toString();
    return ciphertext
}

export const decrypt = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText,'key123');
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    return originalText
}