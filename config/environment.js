/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-md',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyDLHtT7XeTZqbJYbAZprumVFHa9ZJuX2Tc",
      authDomain: "e-pautas.firebaseapp.com",
      databaseURL: "https://e-pautas.firebaseio.com",
      storageBucket: "e-pautas.appspot.com",
      messagingSenderId: "568980210268"
    },
    torii: {  
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
          apiKey:"605443485040-v57m0s296k2befmmtjds8p8gu19mtbmd.apps.googleusercontent.com",
          redirectUri: "https://localhost:4200/oauth2callback"
        }
      }
    },
    // torii: {  
    //   sessionServiceName: 'session',
    //   providers: {
    //     'google-oauth2': {
    //       apiKey:"605443485040-vlsktsl59tsla3latdgfb1q1jqm093sk.apps.googleusercontent.com",
    //       redirectUri: "https://ember-secom-app.firebaseapp.com/__/auth/handler"
    //       // redirectUri: "https://auth.firebase.com/v2/ember-secom-app/auth/google/callback",
    //     }
    //   }
    // },
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
