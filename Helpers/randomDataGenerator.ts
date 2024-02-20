import { faker } from '@faker-js/faker';
import {
  Address,
  CreditCardData,
  userData
} from '../EnumsAndDatatypes/CustomDataTypes';
import { getDate, getOffsetDate } from './DateHelper';
import { CREDIT_CARD_PROVIDERS, timeOffsetType } from 'EnumsAndDatatypes/enums';

const fake = faker;
const _ = require('lodash');

/**
 * Generates a random user object with properties like first name, last name, email, date of birth, gender, address, phone number, credit card information, and a password.
 * @param $gender 'male' | 'female'.
 * @param $creditCardProvider enum CREDIT_CARD_PROVIDERS.
 * @returns UserData
 *  {
 *    firstName: string;
 *    lastName: string;
 *    email: string;
 *    dob: Date;
 *    gender: string;
 *    address: Address;
 *    phoneNumber: string;
 *    creditCardInfo: CreditCardData;
 *    password: string;
 *  }
 */
export const getRandomUser = (
  $gender: 'male' | 'female',
  $creditCardProvider?: CREDIT_CARD_PROVIDERS
): userData => {
  const $firstName = getRandomFirstName($gender);
  const $lastName = getRandomLastName($gender);
  return {
    firstName: $firstName,
    lastName: $lastName,
    email: getRandomEmailAddress($firstName, $lastName),
    dob: getRandomDOB(),
    gender: $gender,
    address: getRandomAddress(),
    phoneNumber: faker.phone.number(),
    creditCardInfo: getRandomCreditCard($creditCardProvider),
    password: process.env.PREDEFINED_USER_PASSWORD
  };
};

/**
 * Generates a random email address based on the provided first name, last name, and domain.
 * @param firstName string
 * @param lastName string
 * @example getRandomEmailAddress('Mike','Smith') returns - 'mike_smith83@customdomain.dev'
 */
export const getRandomEmailAddress = (firstName: string, lastName: string) => {
  return fake.internet
    .email({
      firstName: firstName,
      lastName: lastName,
      provider: process.env.FAKER_EMAIL_DOMAIN,
      allowSpecialCharacters: false
    })
    .toLowerCase();
};

/**
 * Generate random first name based on the provided gender.
 * @param gender 'male' | 'female'
 * @example getRandomFirstName('female') returns - 'Jesica'
 * @example getRandomFirstName('male') returns - 'Mike'
 */
export const getRandomFirstName = (gender: 'male' | 'female'): string => {
  return fake.person.firstName(gender);
};

/**
 * Generate random last name based on the provided gender.
 * @param gender 'male' | 'female'
 * @example getRandomLastName('female') returns - 'Hilton'
 * @example getRandomLastName('male') returns - 'Grey'
 */
export const getRandomLastName = (gender: 'male' | 'female'): string => {
  return fake.person.lastName(gender);
};

/**
 * Generates a random address object with properties like address line 1, address line 2, city, zip code, state, and country.
 * @param abbreviated If true this will return abbreviated first-level administrative entity names. Otherwise this will return the long name. Defaults to true.
 * @example getRandomAddress(true) returns state as - 'CA'
 * @example getRandomAddress(false) returns state as - 'California'
 */
export const getRandomAddress = (abbreviated: boolean = true): Address => {
  return {
    addressLine1: fake.location.streetAddress(false),
    addressLine2: fake.location.secondaryAddress(),
    city: getRandomCity(),
    zipCode: fake.location.zipCode(),
    state: getRandomState(abbreviated),
    country: fake.location.country()
  };
};

/**
 * Generates random city name.
 * @example getRandomCity() returns - 'Alexandria'
 */
export const getRandomCity = (): string => {
  return fake.location.city();
};

/**
 * Generates random state name.
 * @param abbreviated If true this will return abbreviated first-level administrative entity names. Otherwise this will return the long name. Defaults to true.
 * @example getRandomState(true) returns - 'VA'
 * @example getRandomState(false) returns - 'Virginia'
 */
export const getRandomState = (abbreviated: boolean): string => {
  return fake.location.state({ abbreviated: abbreviated });
};

/**
 * Generates random date for general purposes.
 * @param options — The optional options object.
 * @param options.years — The range of years the date may be in the past. Defaults to 1.
 * @param options.refDate — The date to use as reference point for the newly generated date.
 * @example getRandomDate({ years: 10 }) returns - '2019-10-25T21:34:19.488Z'
 */
export const getRandomDate = (options?: {
  years?: number;
  refDate?: string | number | Date;
}): Date => {
  return fake.date.past(options);
};

/**
 * Generates random date of birth date.
 * @param options — The options to use to generate the birthdate. If no options are set, an age between 18 and 80 (inclusive) is generated.
 * @param options.min — The minimum age or year to generate a birthdate.
 * @param options.max — The maximum age or year to generate a birthdate.
 * @param options.refDate — The date to use as reference point for the newly generated date. Defaults to now.
 * @param options.mode
 * The mode to generate the birthdate. Supported modes are 'age' and 'year' .
 * There are two modes available 'age' and 'year':
 *  'age': The min and max options define the age of the person (e.g. 18 - 42).
 *  'year': The min and max options define the range the birthdate may be in (e.g. 1900 - 2000).
 * Defaults to year.
 * @example getRandomDOB({ min: 18, max: 65, mode: 'age' }) returns - '2003-11-02T20:03:20.116Z'
 */
export const getRandomDOB = (options?: {
  min?: number;
  max?: number;
  mode?: 'age' | 'year';
  refDate?: string | number | Date;
}): Date => {
  return faker.date.birthdate(options);
};

/**
 * Generates a random ID string.
 * @example getRandomID() returns - 'ID10000000-9999999'
 */
export const getRandomID = (): string => {
  return `ID${_.random(10000000, 99999999, false)}-${_.random(
    1000000,
    9999999,
    false
  )}`;
};

/**
 * Generates a random password string.
 * @param options — An options object. Defaults to {}.
 * @param options.length — The length of the password to generate. Defaults to 15.
 * @param options.memorable — Whether the generated password should be memorable. Defaults to false.
 * @param options.pattern The pattern that all chars should match should match. This option will be ignored, if memorable is true. Defaults to /\w/.
 * @param options.prefix — The prefix to use. Defaults to ''.
 * @example getRandomPassword(8) returns - '89G1wJuB'
 */
export const getRandomPassword = (options?: {
  length?: number;
  memorable?: boolean;
  pattern?: RegExp;
  prefix?: string;
}): string => {
  return fake.internet.password(options);
};

/**
 * Generates a random credit card object with properties like card type, card number, CVV number, and expiration date.
 * @param $cardType Credit card issuer.
 * @returns CreditCardData object.
 */
export const getRandomCreditCard = (
  $cardType: CREDIT_CARD_PROVIDERS = CREDIT_CARD_PROVIDERS.Visa
): CreditCardData => {
  return {
    cardType: $cardType,
    cardNumber: fake.finance.creditCardNumber($cardType.toString()),
    cvvNumber: fake.finance.creditCardCVV(),
    expirationDate: {
      month: (getDate().getMonth() + 1).toString(),
      year: getOffsetDate(timeOffsetType.year, 2).getFullYear().toString()
    }
  };
};

/*
This module generates random user data, including personal information such as name, email, date of birth, address, phone number, and credit card information.
The code heavily utilizes the `faker` library to generate realistic fake data across various categories like personal information, finance, internet, location, and more.
Some parts of the code utilize environmental variables, such as `process.env.PREDEFINED_USER_PASSWORD` and `process.env.FAKER_EMAIL_DOMAIN`.

Overall, this code provides a convenient way to generate random user data for testing or other purposes, leveraging the `faker` library to ensure realistic data.
*/
