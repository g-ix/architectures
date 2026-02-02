import type { PluginManifest } from "./types";

export const installedPlugins: PluginManifest[] = [
  {
    id: "feedback",
    name: "Feedback",
    version: "1.0.0",
    enabled: true,
    web: {
      entry: "@plugins/feedback/web/entry",
      routes: [{ path: "/p/feedback", title: "Feedback", nav: true }],
      commands: [{ id: "feedback.open", title: "Open Feedback" }]
    }
  }
];

export function getEnabledWebPlugins() {
  return installedPlugins.filter(p => p.enabled && p.web);
}

export function getPluginById(pluginId: string) {
  return installedPlugins.find(p => p.id === pluginId && p.enabled);
}
