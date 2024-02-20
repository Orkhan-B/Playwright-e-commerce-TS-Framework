import { CREDIT_CARD_PROVIDERS } from './enums';

/**
  This interface defines the structure of credit card data.
  It has the following properties:
        cardType: A string representing the type of the credit card (e.g., Visa, MasterCard,AMEX).
        cardNumber: A string representing the credit card number.
        cvvNumber: A string representing the CVV (Card Verification Value) number of the credit card.
        expirationDate: An object representing the expiration date of the credit card, with properties month and year.
 */
export interface CreditCardData {
  cardType: CREDIT_CARD_PROVIDERS;
  cardNumber: string;
  cvvNumber: string;
  expirationDate: { month: string; year: string };
}

/**
 This interface represents the structure of an address object.
  - addressLine1: A string representing the first line of the address (e.g., street number and name).
  - addressLine2: A string representing the second line of the address (e.g., apartment number or additional address information).
  - city: A string representing the city or locality of the address.
  - state: A string representing the state or region of the address.
  - zipCode: A string representing the ZIP or postal code of the address.
  - country: A string representing the country of the address.
When implementing this interface, an object must include all the specified properties with their respective data types. 
Using interfaces like this helps enforce consistency and type safety in TypeScript code.
 */
export interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 This interface represents the structure of user data.
  - firstName: A string representing the first name of the user.
  - lastName: A string representing the last name of the user.
  - email: A string representing the email address of the user.
  - dob: A `Date` object representing the date of birth of the user.
  - gender: A string representing the gender of the user.
  - address: An object conforming to the `Address` interface, representing the user's address.
  - phoneNumber: A string representing the phone number of the user.
  - creditCardInfo: An object conforming to the `CreditCardData` interface, representing the user's credit card information.
  - password: A string representing the password of the user.
When implementing this interface, an object must include all the specified properties with their respective data types. 
Using interfaces like this helps enforce consistency and type safety in TypeScript code.
 */
export interface userData {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
  gender: string;
  address: Address;
  phoneNumber: string;
  creditCardInfo: CreditCardData;
  password: string;
}

/*
These interfaces provide a clear and structured way to define the expected 
shape of credit card data, user data, and addresses in TypeScript. 
They used as type annotations for variables and function parameters 
to ensure type safety and improve code readability.
*/
