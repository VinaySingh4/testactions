import { Config } from '@stencil/core';
import dotenvPlugin from 'rollup-plugin-dotenv';
import {env} from process;

export const config: Config = {
  namespace: 'testgithooks',
  env:{
    NODE_ENV:process.env.NODE_ENV,
    USERPOOLID: process.env.AWS_USERPOOLID
    
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins:[
    dotenvPlugin();
  ]
};
