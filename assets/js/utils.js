export const gebi = id => document.getElementById(id);
export const qs = str => document.querySelector(str);
export const qsa = str => document.querySelectorAll(str);
export const html = String.raw;

export function formatWithThousands(e){
    return `${e}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || e;
};

export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}

export function clearFooter() {
    let footer = gebi("footer");
    footer.innerHTML = "";
    footer.classList = "";
}