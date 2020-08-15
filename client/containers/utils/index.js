export function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
}

export function getName(str) {
  let display = splitCamelCase(str)
  if (display.includes('taxi')) {
    display = display.includes('Night')
      ? 'Taxi Stands (night time only)'
      : 'Taxi Stands'
  }
  if (display.includes('atm')) display = display.toUpperCase()
  return display
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
