import React from 'react';
import createLoadRemoteModule, {
  createRequires,
} from '@paciolan/remote-module-loader';

const dependencies = {
  react: React,
};

const requires = createRequires(dependencies);

export const loadRemoteModule = createLoadRemoteModule({ requires });
