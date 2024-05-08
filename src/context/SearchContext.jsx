import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  let allData;
  return (
    <SearchContext.Provider value={{ allData }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("SearchContext used outside Provider");
  return context;
}

export { SearchContext, useSearch };
