/*global describe, it, before, beforeEach, after, afterEach, inject, expect */

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
  var ApiFactory;
  var $httpBackend;

  beforeEach(inject(function ($injector) {
    SearchService = $injector.get('SearchService');
    ApiFactory = $injector.get('ApiFactory');
    $httpBackend = $injector.get('$httpBackend');
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be a valid service', function () {
    expect(SearchService).not.toBe(undefined);
  });

  it('should have a default state of not loading', function () {
    expect(SearchService.loading).toBe(false);
  });

  iit('should return a Search object with movies', function () {
    $httpBackend.whenGET('views/search-view.html').passThrough();
    $httpBackend.expectGET(ApiFactory.omdb + '?t=' + 'Shaw')
      .respond(200, fake.movies);

      $httpBackend.flush();
  });

});

