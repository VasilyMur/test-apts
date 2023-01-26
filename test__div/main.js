const mainDiv = document.querySelector('.main__div');
const aptartments = Array.from(document.querySelectorAll('.apt'));

const data = [
    {title: 'apt 1', description: 'test 1', id: 11},
    {title: 'apt 2', description: 'test 2', id: 22},
    {title: 'apt 3', description: 'test 3', id: 33},
]

const getMarkup = ({ title, description }) => {
    return `<div class="aptCard"><div>${title}</div><div>${description}</div></div>`
}

function getData(e) {
    const { dataset } = e.target;
    const { aptid } = dataset;
    const id = Number(aptid);

    const apartmentData = data.find(d => d.id === id);

    const html = getMarkup(apartmentData);
    mainDiv.innerHTML = html;
}

aptartments.forEach(key => key.addEventListener('click', getData));
