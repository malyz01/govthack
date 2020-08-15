export function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
}

export function getCategories(city) {
  const facilities = city.facilities
  const categories = Object.keys(facilities)
  let data = []
  for (const category of categories) {
    data.push(facilities[category])
  }
  return [data.flat(), categories]
}

export function filterCategories(city, filter) {
  const facilities = city.facilities
  const categories = Object.keys(facilities).filter((c) => !filter.includes(c))

  let data = []
  for (const category of categories) {
    data.push(facilities[category])
  }
  return data.flat()
}
