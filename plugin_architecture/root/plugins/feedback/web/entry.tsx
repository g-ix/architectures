export async function Page({ pluginId }: { pluginId: string }) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Feedback Plugin</h1>
      <p>Plugin ID: {pluginId}</p>

      <form action="/api/feedback" method="post">
        <textarea name="message" placeholder="Your feedback..." />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export const commands = {
  "feedback.open": async () => {
    // Example “menu action”
    console.log("Feedback command executed: feedback.open");
  }
};
