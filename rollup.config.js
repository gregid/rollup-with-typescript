import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
const sourcemapType = 'hidden'; // true | 'inline' | 'hidden'
export default {
    input: './src/index.ts',
    output: [
        { format: 'cjs', file: pkg.main, sourcemap: sourcemapType, globals: { underscore: '_' }, exports: 'auto' },
        { format: 'esm', file: pkg.module, sourcemap: sourcemapType, globals: { underscore: '_' }, exports: 'auto' },
        { format: 'umd', file: 'output/bundle.umd.js', sourcemap: sourcemapType, globals: { underscore: '_' }, exports: 'auto' }
    ],
    external: ['underscore'],
    plugins: [
        typescript(),
    ],
};