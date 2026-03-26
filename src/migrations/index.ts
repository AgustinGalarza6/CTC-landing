import * as migration_20260310_184802 from './20260310_184802';
import * as migration_20260312_add_downloads_external_url from './20260312_add_downloads_external_url';

export const migrations = [
  {
    up: migration_20260310_184802.up,
    down: migration_20260310_184802.down,
    name: '20260310_184802'
  },
  {
    up: migration_20260312_add_downloads_external_url.up,
    down: migration_20260312_add_downloads_external_url.down,
    name: '20260312_add_downloads_external_url'
  },
];
