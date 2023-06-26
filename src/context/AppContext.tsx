import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Application } from '../types';
import { getApplications } from '../api/getApplications';
import { useDebounce } from '../hooks/useDebounce';

export interface ContextProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  debouncedSearchTerm: string;
  options: Application[];
  setOptions: React.Dispatch<React.SetStateAction<Application[]>>;
  activeOptionIndex: number;
  setActiveOptionIndex: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<Partial<ContextProps>>({});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [options, setOptions] = useState<Application[]>([]);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (debouncedSearchTerm) {
      getApplications(debouncedSearchTerm).then((results) => {
        setOptions(results);
        setLoading(false);
        setIsOpen(true);
      });
    } else {
      setOptions([]);
      setLoading(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        debouncedSearchTerm,
        options,
        setOptions,
        activeOptionIndex,
        setActiveOptionIndex,
        isOpen,
        setIsOpen,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
