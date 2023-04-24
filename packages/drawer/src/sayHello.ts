import { useMemo } from 'react';

export const useHelloWorld = (message: string) => {
  return useMemo(() => `hello ${message}`, [message]);
};
