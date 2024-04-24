import { customAlphabet } from 'nanoid';

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7,
); // 7-character random string

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const json = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (json.error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export const runAsyncFnWithoutBlocking = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (...args: any) => Promise<any>,
) => {
  void fn();
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getStringFromBuffer = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

export enum ResultCode {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidSubmission = 'INVALID_SUBMISSION',
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UnknownError = 'UNKNOWN_ERROR',
  UserCreated = 'USER_CREATED',
  UserLoggedIn = 'USER_LOGGED_IN',
}

export const getMessageFromCode = (resultCode: string) => {
  switch (resultCode) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    case ResultCode.InvalidCredentials:
      return 'Invalid credentials!';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    case ResultCode.InvalidSubmission:
      return 'Invalid submission, please try again!';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    case ResultCode.UserAlreadyExists:
      return 'User already exists, please log in!';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    case ResultCode.UserCreated:
      return 'User created, welcome!';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    case ResultCode.UnknownError:
      return 'Something went wrong, please try again!';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    case ResultCode.UserLoggedIn:
      return 'Logged in!';
  }
};
