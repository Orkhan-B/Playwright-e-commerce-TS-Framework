import { getRandomCreditCard } from '@helpers/randomDataGenerator';
import { Address, CreditCardData } from 'EnumsAndDatatypes/CustomDataTypes';
import { CREDIT_CARD_PROVIDERS } from 'EnumsAndDatatypes/enums';

/**
 * Predefined Addresses:
   - The Array containing predefined address object for testing purposes.
 */
export const predefinedAddresses: Address[] = [
  {
    addressLine1: '123 Main St.',
    addressLine2: '',
    city: 'New York',
    state: 'NY',
    zipCode: '12345',
    country: 'US'
  }
];
/**
 * Random Credit Card Information:
   - It extracts `expirationDate` and `cvvNumber` from the `getRandomCreditCard()` function. This function generates random credit card information.
 */
const { expirationDate, cvvNumber } = { ...getRandomCreditCard() };

/**
 * Test Credit Cards:
   - An array named `testCreditCards` is containing several objects representing different test credit cards.
   - Each object in the array contains the following properties:
     - `cardType`: Specifies the type of the card.
     - `cardNumber`: The credit card number.
     - `cvvNumber`: The CVV number extracted earlier.
     - `expirationDate`: The expiration date of the card.
 */
export const testCreditCards: CreditCardData[] = [
  {
    cardType: CREDIT_CARD_PROVIDERS.AmericanExpress,
    cardNumber: '378282246310005',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.AmericanExpress,
    cardNumber: '371449635398431',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.AmericanExpressCorporate,
    cardNumber: '378734493671000',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.AustralianBankCard,
    cardNumber: '5610591081018250',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.DinersClub,
    cardNumber: '30569309025904',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.DinersClub,
    cardNumber: '38520000023237',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.Discover,
    cardNumber: '6011111111111117',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.Discover,
    cardNumber: '6011000990139424',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.JCB,
    cardNumber: '3530111333300000',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.JCB,
    cardNumber: '3566002020360505',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.MasterCard,
    cardNumber: '5555555555554444',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.MasterCard,
    cardNumber: '5105105105105100',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.Visa,
    cardNumber: '4111111111111111',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.Visa,
    cardNumber: '4012888888881881',
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  },
  {
    cardType: CREDIT_CARD_PROVIDERS.Visa,
    cardNumber: '4222222222222', //Note : Even though this number has a different character count than the other test numbers, it is the correct and functional number.
    cvvNumber: cvvNumber,
    expirationDate: expirationDate
  }
];

/*
In summary, this code provides predefined addresses and a set of test credit card data for use in testing, for scenarios where real credit card data shouldn't be used. 

While testing, use only the credit card numbers listed here or add your own card numbers provided by payment processing provider.
Expiration Date must be a valid date in the future (use the mmyy format).

All Credit cards taken from PayPal website.
https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
*/
