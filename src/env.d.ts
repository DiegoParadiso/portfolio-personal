/// <reference path="../.astro/types.d.ts" />
/// <reference path=".././types.d.ts" />

interface ImportMetaEnv {
  readonly TMDB_API_KEY: string;
  readonly TMDB_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
