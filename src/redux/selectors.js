import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const getVisibleUsers = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    const fiter = query
      ? contacts.filter(contact => contact.name.toLowerCase().includes(query))
      : contacts;

    return fiter;
  }
);
