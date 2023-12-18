export default function ErrorPage({ error }: { error: string }) {
  return (
    <main className="mt-6">
      <p className="text-muted-foreground text-center">{error}</p>
    </main>
  );
}
