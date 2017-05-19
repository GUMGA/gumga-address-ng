(function () {
  'use strict';
  AddressService.$inject = ['$http'];
  function AddressService($http) {

    var base = 'http://45.33.100.20/services-api'

    return {
      everyUf: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR',
        'RJ', 'RN', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      everyLogradouro: ['Outros', 'Aeroporto', 'Alameda', 'Área', 'Avenida', 'Campo', 'Chácara', 'Colônia', 'Condomínio', 'Conjunto', 'Distrito',
        'Esplanada', 'Estação', 'Estrada', 'Favela', 'Fazenda', 'Feira', 'Jardim', 'Ladeira', 'Largo', 'Lago', 'Lagoa', 'Loteamento',
        'Núcleo', 'Parque', 'Passarela', 'Pátio', 'Praça', 'Quadra', 'Recanto', 'Residencial', 'Rodovia', 'Rua', 'Setor', 'Sítio',
        'Travessa', 'Trevo', 'Trecho', 'Vale', 'Vereda', 'Via', 'Viaduto', 'Viela', 'Via'],
      availableCountries: ['Brasil'],
      returnFormattedObject: function () {
        return {
          zipCode: null,
          premisseType: null,
          premisse: null,
          number: null,
          information: null,
          neighbourhood: null,
          localization: null,
          state: null,
          country: null
        }
      },
      getLocations: function(uf, apiSearchCep){
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/buscar-cidades?uf='+uf);
      },
      getPremisseByUFAndCity: function(uf, city, apiSearchCep){
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/buscar-logradouros?uf='+uf+'&cidade='+city);
      },
      searchCepByUfAndCityAndPremisse: function(uf, city, premisse, apiSearchCep){
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/buscar-endereco-completo?uf='+uf+'&cidade='+city+'&logradouro='+premisse);
      },
      getCep: function(cep, apiSearchCep){
        return $http.get(getApiSearchCep(apiSearchCep) + '/public/busca-cep/' + cep)
      }
    }

    function getApiSearchCep(apiSearchCep) {
      return apiSearchCep || base
    }

  }
  angular.module('gumga.address.services', [])
    .factory('GumgaAddressService', AddressService);
})();
