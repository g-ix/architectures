import type { PluginManifest } from "./types";

export const installedPlugins: PluginManifest[] = [
  {
    id: "feedback",
    enabled: true,
    api: {
      entry: "@plugins/feedback/api/router",
      mountPath: "/v1/plugins/feedback"
    }
  }
];

export function getEnabledApiPlugins() {
  return installedPlugins.filter(p => p.enabled && p.api);
}
