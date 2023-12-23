const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <table>
        <tr>
            <td>Key</td>
            <td>KeyCode</td>
            <td>Code</td>
        </tr>
        <tr>
            <th>${e.key === ' ' ? 'Space' : e.key}</th>
            <th>${e.keyCode}</th>
            <th>${e.code}</th>
        </tr>
    </table>
    `
})






