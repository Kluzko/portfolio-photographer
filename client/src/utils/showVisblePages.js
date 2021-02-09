export const showVisiblePages = (page, total) => {
  function filterPages(visiblePages, totalPages) {
    return visiblePages.filter((page) => page <= totalPages);
  }
  if (total < 7) {
    return filterPages([1, 2, 3, 4, 5, 6], total);
  } else {
    if (page % 5 >= 0 && page > 4 && page + 2 < total) {
      return [1, page - 1, page, page + 1, total];
    } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
      return [(1, total - 3, total - 2, total - 1, total)];
    } else {
      return [1, 2, 3, 4, 5, total];
    }
  }
};
