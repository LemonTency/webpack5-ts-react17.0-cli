export default (item: string) =>
  item.replace(/^(\w)|-(\w)/g, (_, $1: string, $2: string) => {
    if ($1) {
      return $1.toUpperCase()
    }
    if ($2) {
      return $2.toUpperCase()
    }
    return ''
  })
