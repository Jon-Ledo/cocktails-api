const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id
    
    // store the id in local storage to use later
    localStorage.setItem('drink', id)
  });
};

export default setDrink;