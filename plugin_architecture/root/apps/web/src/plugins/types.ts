import { JSX } from "react";

export type PluginManifest = {
  id: string;
  name: string;
  version: string;
  enabled: boolean;
  web?: {
    entry: string;
    routes: { path: string; title: string; nav?: boolean }[];
    commands?: { id: string; title: string }[];
  };
};

export type WebPluginModule = {
  // A page-like component the host can render
  Page: (props: { pluginId: string }) => Promise<JSX.Element> | JSX.Element;

  // Optional “commands” the host can call, like menu actions
  commands?: Record<string, () => Promise<void> | void>;
};
