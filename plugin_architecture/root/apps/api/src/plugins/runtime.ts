import type { ApiPluginModule } from "./types";

export async function loadApiPlugin(entry: string): Promise<ApiPluginModule> {
  switch (entry) {
    case "@plugins/feedback/api/router":
      return (await import("@plugins/feedback/api/router")) as ApiPluginModule;
    default:
      throw new Error(`Unknown api entry: ${entry}`);
  }
}
