/**
  - This enum represents types of time offsets.
  - It defines the following members:
    - `year`: Represents a time offset in years.
    - `month`: Represents a time offset in months.
    - `day`: Represents a time offset in days.
    - `hour`: Represents a time offset in hours.
    - `minute`: Represents a time offset in minutes.
*/
export enum timeOffsetType {
  year,
  month,
  day,
  hour,
  minute
}

/**
  - This enum represents types of offsets for credit card expiration dates.
  - It defines the following members:
    - `year`: Represents an offset for years.
    - `month`: Represents an offset for months.
*/
export enum creditCardOffsetType {
  year,
  month
}

/**
  - This enum represents types of users.
  - It defines the following members:
    - `testUser`: Represents a test user.
    - `randomMaleUser`: Represents a randomly generated male user.
    - `randomFemaleUser`: Represents a randomly generated female user.
    - `testUser2`: Represents another test user.
    - `pwdUser`: Represents a user for password testing.
*/
export enum USER_TYPE {
  testUser,
  randomMaleUser,
  randomFemaleUser
}

export enum CREDIT_CARD_PROVIDERS {
  AmericanExpress,
  AmericanExpressCorporate,
  AustralianBankCard,
  DinersClub,
  Discover,
  JCB,
  MasterCard,
  Visa
} //TODO: implement enum in cc data functions.

/*
These enums provide a way to define a set of named constants, 
making the code more readable and maintainable by using descriptive names instead of numeric values. 
They used to represent different types of time offsets, credit card offset types, 
and user types throughout the codebase.
*/
