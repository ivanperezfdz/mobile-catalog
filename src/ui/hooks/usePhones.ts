import { useContext } from 'react';
import { PhoneContext } from '../context/PhoneContext';

export const usePhones = () => {
  const context = useContext(PhoneContext);

  if (context === undefined) {
    throw new Error('usePhones must be used within a PhoneProvider');
  }

  return context;
};
