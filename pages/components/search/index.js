export default {
  _searchFunc(e){
    const { searchName } = e.detail.value
    if (this.catchSearchTap) {
      this.catchSearchTap(e, searchName);
    } else {
      console.warn('no catchSearchTap method');
    }
  }
}