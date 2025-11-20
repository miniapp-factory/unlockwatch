export async function getUnlocks() {
  const res = await fetch("/api/unlocks");
  if (!res.ok) {
    throw new Error("Failed to fetch unlocks");
  }
  return res.json();
}
