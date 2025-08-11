<script>
  const button = document.getElementById('dropdownButton')
  const menu = document.getElementById('menu')

  button.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block'? 'none':'block'
  }
  )

  document.addEventListener('click', (event) => {
    if (!document.getElementById('dropdown').contains(event.target)) {
      menu.style.display = 'none'}
    }
    )
  </script>