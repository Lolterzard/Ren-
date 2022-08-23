const create = (rootElement, width, height) => {
    const tableElement = document.createElement('div')
    tableElement.classList.add('table')

    const create = document.createElement.bind(document)

    for(let y = 0; y < height; y++) {
        const row = create('div')
        row.classList.add('row')
        for(let x = 0; x < width; x++) {
            const cell = create('div')
            cell.classList.add('cell')
            row.appendChild(cell)
        }
        tableElement.appendChild(row)
    }

    rootElement.appendChild(tableElement)
    return table
}

export const table = {
    create
}

