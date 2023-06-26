import React, { useRef, useContext } from 'react';
import { Application } from '../types';
import AppCard from './AppCard';
import { AppContext, ContextProps } from '../context/AppContext';

const DropdownInput: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    options,
    activeOptionIndex,
    setActiveOptionIndex,
    isOpen,
    setIsOpen,
    loading,
    setLoading,
  } = useContext(AppContext) as ContextProps;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value !== '') setLoading(true);
  };

  const handleOptionClick = (app: Application) => {
    setSearchTerm(app.name);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        if (activeOptionIndex > 0) {
          setActiveOptionIndex(activeOptionIndex - 1);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (activeOptionIndex < options.length - 1) {
          setActiveOptionIndex(activeOptionIndex + 1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (options[activeOptionIndex]) {
          setSearchTerm(options[activeOptionIndex].name);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
    }
  };

  const handleMouseEnter = (index: number) => {
    setActiveOptionIndex(index);
  };

  return (
    <>
      <span>website</span>
      <div className="dropdown">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter login URL or app name"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="dropdown-input p-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 shadow placeholder:pl-1"
        />
        {isOpen && (
          <ul className="dropdown-options rounded-md border shadow-lg w-1/2">
            {loading || (options.length <= 0 && searchTerm !== '') ? (
              <AppCard
                loading={loading}
                showNoResultsMessage={searchTerm !== ''}
              />
            ) : (
              options.map((app: Application, index: number) => (
                <AppCard
                  onMouseEnter={() => {
                    handleMouseEnter(index);
                    setIsOpen(true);
                  }}
                  key={app.id}
                  app={app}
                  loading={loading}
                  isActive={activeOptionIndex === index}
                  onClick={() => handleOptionClick(app)}
                  onMouseLeave={() => {
                    setIsOpen(false);
                  }}
                />
              ))
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropdownInput;
