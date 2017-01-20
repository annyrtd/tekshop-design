const step = 24;
const verbatims = [];

class Verbatim {
    constructor(verbatim) {
        this.verbatimRows = verbatim.querySelectorAll('tr.c_verbatim--content');
        this.hideRows();
        this.shownRowsNumber = 0;

        let button = verbatim.querySelector('td.c_verbatim--content');
        if (!button) {
            let td = document.createElement('td');
            td.innerText = 'There are more rows';
            td.setAttribute('class', 'c_verbatim--content');
            let tr = document.createElement('tr');
            tr.appendChild(td);
            const lastRow = this.verbatimRows[this.verbatimRows.length - 1];
            lastRow.parentNode.appendChild(tr);
            button = td;
        }
        this.verbatimAddingRowsButton = button;
    }

    hideRows() {
        this.verbatimRows.forEach(row => {
            row.style.display = 'none';
        });
    }

    showNextRows() {
        const rowsToShow = [].filter.call(this.verbatimRows, (item, index) => index >= this.shownRowsNumber && index < this.shownRowsNumber + step);

        if (rowsToShow.length > 0) {
            rowsToShow.forEach(row => {
                row.style.display = '';
            });
            this.shownRowsNumber += step;
        } else {
            this.verbatimAddingRowsButton.style.display = 'none';
        }
    }

    addEventListener() {
        this.verbatimAddingRowsButton.addEventListener('click', () => {
            this.showNextRows();
        });
    }
}

export const initVerbatim = _ => {
    const verbatim = new Verbatim(_);
    verbatims.push(verbatim);
    verbatim.addEventListener();
    verbatim.showNextRows();
};