function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = String(document.getElementById('searchField').value)
      let flag = false
      const rows = document.querySelector('.container tbody').getElementsByTagName('tr')
      for (let i = 0; i < rows.length; i++) {
         const row = rows[i]
         row.classList.remove('select')
         const cells = row.getElementsByTagName('td')
         for (let j = 0; j < cells.length; j++) {
            if (input===cells[j].textContent || cells[j].textContent.includes(input)){
               row.classList.add('select')
            }
         }
      }
   }
}