function AddressProvider(){

  let defaultConfiguration = {
    servicesAPI : 'http://45.33.100.20/services-api',
    googleKey: '',
    translation : {
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
    }
  }

  const setGoogleKey = (key) => defaultConfiguration['googleKey'] = key;

  const getGoogleKey = () => defaultConfiguration['googleKey'];

  const setServicesAPI = (apiLocation) => defaultConfiguration['servicesAPI'] = apiLocation;

  const getServicesAPI = () => defaultConfiguration['servicesAPI'];

  const setTranslation = (translation) => Object.keys(translation)
    .forEach(key => defaultConfiguration['translation'][key] = translation[key]);

  const getTranslation = () => defaultConfiguration['translation'];

  return {
    setGoogleKey: setGoogleKey,
    getGoogleKey: getGoogleKey,
    setServicesAPI: setServicesAPI,
    getServicesAPI: getServicesAPI,
    setTranslation: setTranslation,
    getTranslation: getTranslation,
    $get: function(){
      return {
        setGoogleKey: setGoogleKey,
        getGoogleKey: getGoogleKey,
        setServicesAPI: setServicesAPI,
        getServicesAPI: getServicesAPI,
        setTranslation: setTranslation,
        getTranslation: getTranslation
      }
    }
  }
}

AddressProvider.$inject = [];

export default AddressProvider;
