import { indexer, type indexerOptions } from 'ts-cornucopia/scripts';

import { type Plugin } from 'rollup';

export default function (path: string | string[], options: indexerOptions = {}): Plugin {
    return {
        name: 'indexer',
        version: '1.0.0',
        buildStart: {
            order: 'pre',
            async handler() {
                indexer(path, options);
            }
        }

    };
}
