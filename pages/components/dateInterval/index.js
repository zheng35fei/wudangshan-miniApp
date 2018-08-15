export default {
  _startDateInput(e){

    console.log('start', e.currentTarget.dataset)
    const { startLimitDate, endLimitDate, startDate, endDate } = e.currentTarget.dataset;
    let realEndDate = new Date(endDate).getTime() < new Date(endLimitDate).getTime() ? endDate : endLimitDate
    // realEndDate = startDate === endDate ? endLimitDate : realEndDate
    my.datePicker({
      format: 'yyyy-MM-dd',
      currentDate: startDate,
      startDate: startLimitDate,
      endDate: realEndDate,
      success: (res) => {
        console.log(res)
        if (this.onSelectDate) {
          this.onSelectDate(e, res.date, 'startDate');
        } else {
          console.warn('no onSelectDate method');
        }
      },
    });
  },
  _endDateInput(e){
    console.log('end', e.currentTarget.dataset)
    const { startLimitDate, endLimitDate, startDate, endDate } = e.currentTarget.dataset;
    let realStartDate = new Date(startDate).getTime() > new Date(startLimitDate).getTime() ? startDate : startLimitDate
    // realStartDate = startDate === endDate ? startLimitDate : realStartDate
    my.datePicker({
      format: 'yyyy-MM-dd',
      startDate: realStartDate,
      endDate: endLimitDate,
      success: (res) => {
        console.log(res)
        if (this.onSelectDate) {
          this.onSelectDate(e, res.date, 'endDate');
        } else {
          console.warn('no onSelectDate method');
        }
      },
    });
  }
}