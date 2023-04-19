export async function fetchRepository(repository: string) {
  const response = await fetch(repository)
  const data = await response.json()

  return data
}
