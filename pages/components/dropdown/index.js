export default {
  _onNavItemTap(e) {
    const index = e.currentTarget.dataset.index;
    if (this.onDropdownNavItemTap) {
      this.onDropdownNavItemTap(e, index);
    } else {
      console.warn('no onDropdownNavItemTap method');
    }
  },
  _catchListSortItemTap(e) {
    const { groupIndex, index, parentIndex, sortItem } = e.currentTarget.dataset;

    if (this.catchDropdownSortItemTap) {
      this.catchDropdownSortItemTap(e, groupIndex, parentIndex, index, sortItem);
    } else {
      console.warn('no catchDropdownSortItemTap method');
    }
  },
  _catchListItemTap(e) {
    const { index, parentIndex, filter, title } = e.currentTarget.dataset;

    if (this.catchDropdownNavItemTap) {
      this.catchDropdownNavItemTap(e, parentIndex, index, filter, title);
    } else {
      console.warn('no catchDropdownNavItemTap method');
    }
  },
  _catchBgTap(e) {
    if (this.catchDropdownBgTap) {
      this.catchDropdownBgTap(e);
    } else {
      console.warn('no catchDropdownBgTap method');
    }
  },
  _catchListSortConfirm(e) {
    const { parentIndex } = e.currentTarget.dataset;
    if (this.catchDropdownSortConfirm) {
      this.catchDropdownSortConfirm(e, parentIndex);
    } else {
      console.warn('no catchDropdownSortConfirm method');
    }
  }
};
