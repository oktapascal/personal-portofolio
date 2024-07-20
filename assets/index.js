document.addEventListener('DOMContentLoaded', () => {
  const elReleaseYear = document.getElementById('release-year')
  const currentYear = new Date().getFullYear()

  elReleaseYear.innerText = currentYear
})