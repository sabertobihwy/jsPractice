
export default async function movieList() {
    const resp = await fetch('/api/movies')
    const data = await resp.json()
  return data
}
