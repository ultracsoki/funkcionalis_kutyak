import dogs from './dogs.json';

const lista = Array.from(dogs);

const eletkorSzerint = lista.sort((a,b) => {
  if(a.eletkor == b.eletkor){
  return a.nev.localeCompare(b.nev);
  } else {
  return a.eletkor - b.eletkor;}
});


const Labradorok = dogs.filter(kutya => kutya.fajta == "Labrador").map(kutya => (kutya.nev + '(' + kutya.eletkor + ' éves)'));
const Labradorok2 = dogs.filter(kutya => kutya.fajta == "Labrador").map(kutya => ({nev:kutya.nev,eletkor:kutya.eletkor}));

const IdosKutyak = dogs.filter(kutya => kutya.eletkor > 10).map(kutyaNev => kutyaNev.gazda_neve);

console.log(Labradorok);
console.log(Labradorok2);
console.log(eletkorSzerint);
console.log(IdosKutyak);


document.getElementById('osszes').addEventListener("click",tablazatOsszesKutya);
document.getElementById('eletkorSzerint').addEventListener("click",tablazat1A);
document.getElementById('labradorok').addEventListener("click",tablazat1B);
document.getElementById('tizEvnelIdosebb').addEventListener("click",tablazat1C);
document.getElementById('labradorokLista').addEventListener("click",listaLabradorok);

function tablazatOsszesKutya()
{
  const tbody = document.getElementById('tbody');
  tbody.textContent = '';
  for(const s of dogs)
  {
    const row = document.createElement('tr');
    const id = document.createElement('td');
    const nev = document.createElement('td');
    const eletkor = document.createElement('td');
    const fajta = document.createElement('td');
    const gazda_neve = document.createElement('td');
    id.textContent = `${s.id}`;
    nev.textContent = `${s.nev}`;
    eletkor.textContent = `${s.eletkor}`;
    fajta.textContent = `${s.fajta}`;
    gazda_neve.textContent = `${s.gazda_neve}`;
    row.appendChild(id);
    row.appendChild(nev);
    row.appendChild(eletkor);
    row.appendChild(fajta);
    row.appendChild(gazda_neve);
    tbody.appendChild(row);
  }
}

function tablazat1A()
{
  const tbody = document.getElementById('tbody');
  tbody.textContent = '';
  for(const s of eletkorSzerint)
  {
    const row = document.createElement('tr');
    const id = document.createElement('td');
    const nev = document.createElement('td');
    const eletkor = document.createElement('td');
    const fajta = document.createElement('td');
    const gazda_neve = document.createElement('td');
    id.textContent = `${s.id}`;
    nev.textContent = `${s.nev}`;
    eletkor.textContent = `${s.eletkor}`;
    fajta.textContent = `${s.fajta}`;
    gazda_neve.textContent = `${s.gazda_neve}`;
    row.appendChild(id);
    row.appendChild(nev);
    row.appendChild(eletkor);
    row.appendChild(fajta);
    row.appendChild(gazda_neve);
    tbody.appendChild(row);
  }
}

function tablazat1B()
{
  const tbody = document.getElementById('tbody');
  tbody.textContent = '';
  for(const s of Labradorok2)
  {
    const row = document.createElement('tr');
    const nev = document.createElement('td');
    const eletkor = document.createElement('td');
    nev.textContent = `${s.nev}`;
    eletkor.textContent = `${s.eletkor}`;
    row.appendChild(nev);
    row.appendChild(eletkor);
    tbody.appendChild(row);
  }
}

function tablazat1C()
{
  const tbody = document.getElementById('tbody');
  tbody.textContent = '';
  for(const s of IdosKutyak)
  {
    const row = document.createElement('tr');
    row.textContent = `${s}`;
    tbody.appendChild(row);
  }
}

function listaLabradorok()
{
  const tbody = document.getElementById('tbody');
  tbody.textContent = '';
  for(const s of Labradorok)
  {
    const ul = document.createElement('ul');
    const adottKutya = document.createElement('li');
    adottKutya.textContent = `${s}`;
    ul.appendChild(adottKutya);
    tbody.appendChild(ul);
  }
}