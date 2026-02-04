import type { WebPluginModule } from "./types";
import { getPluginById } from "./registry";

export async function loadWebPlugin(pluginId: string): Promise<WebPluginModule> {
  const manifest = getPluginById(pluginId);
  if (!manifest?.web) throw new Error(`Plugin not found or disabled: ${pluginId}`);

  // Dynamic import based on manifest entry
  // In real-world: you’d use a map for bundlers (see below).
  switch (manifest.web.entry) {
    case "@plugins/feedback/web/entry":
      return (await import("@plugins/feedback/web/entry")) as WebPluginModule;
    default:
      throw new Error(`Unknown web entry: ${manifest.web.entry}`);
  }
}
