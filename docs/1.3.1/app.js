angular.module('app', ['gumga.address', 'ui.bootstrap'])
  .config(['$gumgaAddressProvider', function($gumgaAddressProvider){
      $gumgaAddressProvider.setTranslation({
        country: 'Pais',
        zipCode: 'CEP',
        premisseType: 'Tipo Logradouro',
        premisse: 'Logradouro',
        number: 'Número',
        information: 'Complemento',
        neighbourhood: 'Bairro',
        state: 'UF',
        stateCode: 'Cód. UF',
        localization: 'Localidade',
        formalCode: 'Cód. IBGE',
        coordinates: 'Latitude e Longitude'
      })
  }])
  .controller('Ctrl', function ($http) {
    var ctrl = this;



  })
