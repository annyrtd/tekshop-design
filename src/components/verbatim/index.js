let shownRowsNumber = 0;
const step = 30;
let verbatimRows;
let verbatimAddingRowsButton;

function showFirst30() {
    verbatimRows.forEach((row, index) => {
        if (index >= step) {
            row.style.display = 'none';
        }
    });

    shownRowsNumber += step;
}

function showNext30() {
    const rowsToShow = [].filter.call(verbatimRows, (item, index) => index >= shownRowsNumber && index < shownRowsNumber + step);
    if (rowsToShow.length > 0) {
        rowsToShow.forEach(row => {
            row.style.display = '';
        });
        shownRowsNumber += step;
    } else {
        verbatimAddingRowsButton.style.display = 'none';
    }
}

export const initVerbatim = (_) => {
    verbatimAddingRowsButton = _;
    verbatimRows = document.querySelectorAll('tr.c_verbatim--content');
    showFirst30();
    _.addEventListener('click', showNext30);
};