import type { Router } from "express";

export type PluginManifest = {
  id: string;
  enabled: boolean;
  api?: {
    entry: string;
    mountPath: string;
  };
};

export type ApiPluginModule = {
  router: Router;
};
