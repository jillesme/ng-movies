var fake = {};
fake.movies = {
  'Search':[
    {
    'Title':'The Shawshank Redemption',
    'Year':'1994',
    'imdbID':'tt0111161',
    'Type':'movie'
  },
  {
    'Title':'Shawshank: The Redeeming Feature',
    'Year':'2001',
    'imdbID':'tt0293927',
    'Type':'movie'
  },
  {
    'Title':'Shawshank Prison/Lizzie Borden',
    'Year':'2005',
    'imdbID':'tt0803853',
    'Type':'episode'
  }
  ]
};

describe('SearchService', function () {

  beforeEach(module('ngMovies'));

  var SearchService;

  beforeEach(inject(function ($injector) {
    SearchService = $injector.get('SearchService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should be a valid service', function () {
    expect(SearchService).not.toBe(undefined);
  });

  it('should have a default state of not loading', function () {
    expect(SearchService.loading).toBe(false);
  });

  it('should return a Search object with movies', function () {
    // @TODO fix this
  });

});

