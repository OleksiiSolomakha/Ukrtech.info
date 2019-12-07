AOS.init();

const root = document.querySelector('.row');

const printNewPicture = async () => {
  const res = await fetch('./db.json')
  const data = await res.json();

  const store = document.createElement('div');
  store.setAttribute('class', 'scroll');
  store.setAttribute('data-aos', 'zoom-in-up');

  data.map(item => {
    const div = document.createElement('div');
    div.setAttribute('class', 'col-lg-4 col-sm-6 thumbnail');

    const img = document.createElement('img');
    img.setAttribute('src', item.url);

    div.appendChild(img);
    store.appendChild(div);

  })

  root.appendChild(store);

}

let count = 0;

document.addEventListener('scroll', function () {
  count++;
  if(count <= 5 ) {
    printNewPicture();
  }
});




