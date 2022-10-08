const sortItems = (items, type, stateSetter, direction) => {
  const sorted = [...items].sort((a, b) => {
    if (direction === 'asc') {
      if (a[type] < b[type]) return -1;
      else if (a[type] > b[type]) return 1;
      return 0;
    } else if (direction === 'des') {
      if (a[type] > b[type]) return -1;
      else if (a[type] < b[type]) return 1;
      return 0;
    }
  });

  stateSetter(sorted);
};

export const sortItemsAsc = (items, type, stateSetter) => {
  sortItems(items, type, stateSetter, 'asc');
};

export const sortItemsDes = (items, type, stateSetter) => {
  sortItems(items, type, stateSetter, 'des');
};

export const sortAsc = (list, type) => {
  return [...list].sort((a, b) => a[type] - b[type]);
};

export const sortDes = (list, type) => {
  return [...list].sort((a, b) => b[type] - a[type]);
};
