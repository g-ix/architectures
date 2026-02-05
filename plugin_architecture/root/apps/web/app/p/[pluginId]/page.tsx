import { loadWebPlugin } from "@/src/plugins/runtime";

type Props = {
  params: Promise<{ pluginId: string }>;
};

export default async function PluginPage(props: Props) {
  const { pluginId } = await props.params;

  const plugin = await loadWebPlugin(pluginId);

  // Render plugin page entrypoint
  return plugin.Page({ pluginId });
}
