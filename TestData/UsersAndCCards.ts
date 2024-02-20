import { getRandomUser } from '@helpers/randomDataGenerator';
import { CreditCardData, userData } from 'EnumsAndDatatypes/CustomDataTypes';
import { CREDIT_CARD_PROVIDERS, USER_TYPE } from 'EnumsAndDatatypes/enums';
import { testCreditCards } from './PredefinedData';
import { faker } from '@faker-js/faker';

/**
 * This variable holds the predefined password for the user from .env file.
 */
const PASSWORD = process.env.PREDEFINED_USER_PASSWORD;

/**
 * This function returns user data based on the type.
 * It uses a switch statement to determine the type and returns corresponding user data.
 * If the type is not recognized, it throws an error.
 * @param $USER_TYPE parameter of type `USER_TYPE` (enum)
 */
export function getUserData($USER_TYPE: USER_TYPE): userData {
  switch ($USER_TYPE) {
    case USER_TYPE.testUser: {
      return {
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@test.customdomain.com',
        dob: new Date('01/05/1985'),
        gender: 'male',
        address: {
          addressLine1: '123 E Main St',
          addressLine2: '',
          city: 'Mc Lean',
          state: 'VA',
          zipCode: '22109',
          country: 'US'
        },
        phoneNumber: '1234567890',
        creditCardInfo: getPredefinedCreditCard(CREDIT_CARD_PROVIDERS.Visa),
        password: PASSWORD
      };
    }
    case USER_TYPE.randomFemaleUser: {
      return getRandomUser('female');
    }
    case USER_TYPE.randomMaleUser: {
      return getRandomUser('male');
    }
    default:
      throw new Error(`User type: ${$USER_TYPE} is not defined.`, {
        cause:
          "User type is undefined in USER_TYPE enum or doesn't have switch case implementation."
      });
  }
}

/**
 * This function takes a parameter `$cardType` representing the type of credit card and returns a predefined credit card data object matching that type.
 * It filters the `testCreditCards` array based on the card type and returns a randomly selected credit card object using `faker.helpers.arrayElement`.
 * @param $cardType 'American Express' | 'Discover' | 'MasterCard' | 'Visa'.
 */
export const getPredefinedCreditCard = (
  $cardType: CREDIT_CARD_PROVIDERS
): CreditCardData => {
  const typeMatchingCreditCards: CreditCardData[] = testCreditCards.filter(card =>
    card.cardType === $cardType ? card : null
  );
  return faker.helpers.arrayElement(typeMatchingCreditCards);
};

/* 
This module provides functions for retrieving predefined data.

Overall, this module provides a way to fetch user data based on different user types, 
including predefined test user data and randomly generated user data, 
along with predefined credit card information.
*/
