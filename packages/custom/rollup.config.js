import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'bin/bundle.js',
    format: 'cjs',
  },
  plugins: [typescript({ sourceMap: false }), nodeResolve(), commonjs(), json()],
  external: ['react'],
};
