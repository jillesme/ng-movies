describe('TimeFilter', function () {

  beforeEach(module('ngMovies'));

  var TimeFilter;

  beforeEach(inject(function ($filter) {
    TimeFilter = $filter('TimeFilter');
  }));

  it('should be a filter', function () {
    expect(TimeFilter).not.toBe(undefined);
  });

  it('should convert minutes to hours', function () {
    expect(TimeFilter('110 min')).toBe('1 hour 50 minutes');
    expect(TimeFilter('120 min')).toBe('2 hours');
    expect(TimeFilter('140 min')).toBe('2 hours 20 minutes');
    expect(TimeFilter('15 min')).toBe('15 minutes');
  });

  it('should handle invalid time', function () {
    expect(TimeFilter('N/A')).toBe('N/A');
    expect(TimeFilter('Error')).toBe('N/A');
  });

});

