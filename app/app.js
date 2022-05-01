const field      = document.createElement('table');
const cells      = [];
const cellsCount = 64;

function renderField() {
    for(let y = 0; y < Math.sqrt(cellsCount); y++) {
        const hLine = document.createElement('tr');

        for (let x = 0; x < Math.sqrt(cellsCount); x++) {
            const cell      = document.createElement('td');
            const cellInfo  = {x: x +1, y: y + 1, html: cell};

            if(Math.round(Math.random())) cellInfo.isBomb = true;

            cells.push(cellInfo);
            hLine.append(cell);
        }

        field.append(hLine);
    }


    console.log(cells);
    document.body.append(field);
}

function checkCell({ target: checkedCell }) {
    if (checkedCell.tagName == 'TD') {
        checkedCell.classList.add('checked');

        if(cells.find(el => el.html == checkedCell && el.isBomb)) {
            checkedCell.classList.add('mine');

            setTimeout(function() {
                field.innerHTML = `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `
            }, 500);
        }

        
    }
}

function start() {
    renderField();
    field.addEventListener('click', checkCell);
}

start();