import React from 'react';
import { AppCardProps } from '../types';

const AppCard: React.FC<AppCardProps> = ({
  app,
  isActive,
  onClick,
  loading,
  showNoResultsMessage,
  ...props
}) => {
  return (
    <li
      {...props}
      onClick={onClick}
      className={`dropdown-option flex items-center p-2 hover:bg-blue-100 cursor-pointer  
                    ${isActive ? 'bg-blue-100' : 'bg-white'} ${
        (loading || showNoResultsMessage) && 'justify-center'
      }
                    transition-colors duration-200 ease-in-out rounded-sm`}
    >
      {loading ? (
        <svg
          data-testid="spinner"
          className="animate-spin h-5 w-5 text-blue-200 items-center justify-center"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : showNoResultsMessage && !app ? (
        <p className="text-opacity-50 text-gray-400">No results found</p>
      ) : (
        <>
          <div className="">
            <img
              src={`/icons/ic_${app?.id}.svg`}
              alt={app?.name}
              className="w-10 h-10"
            />
          </div>
          <div className="w-4/5 pl-2">
            <div className="font-medium">{app?.name}</div>
            <div className="text-sm text-gray-500">{app?.domains[0]}</div>
          </div>
        </>
      )}
    </li>
  );
};

export default AppCard;
