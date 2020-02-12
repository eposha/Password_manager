const user = [{
    id: Math.random(),
    name: 'Andrei',
    surname: 'Iepanieshnikov',
    usernameValue: 'Eposha',
    passValue: 'qwerty',
    passwordsData: []
}];

const getItem = key => {
    if (localStorage.getItem(key) === null) {
        setItem('users', user);
    }
    return JSON.parse(localStorage.getItem(key));
}

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


export { setItem, getItem };