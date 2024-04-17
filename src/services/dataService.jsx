function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const id = JSON.parse(sessionStorage.getItem('id'));
    return {token: token, id: id};
}

export async function getUser() {
    const {token, id} = getSession()
    const request = {
        method: "GET",
        headers: {'Content-Type': 'application/json',  Authorization: `Bearer ${token}`}
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${id}`, request);
    if(!response.ok) {
        throw {message: response.statusText, status: response.status}; // eslint-disable-line
    }
    const data = await response.json();

    return data;
}

export async function getUserOrder() {
    const {token, id} = getSession()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${id}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json',  Authorization: `Bearer ${token}`}
    });

    if(!response.ok) {
        throw {message: response.statusText, status: response.status}; // eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function createOrder(order) {
    const {token} = getSession()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: 'POST',
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(order)
    })
    if(!response.ok) {
        throw {message: response.statusText, status: response.status}; // eslint-disable-line
    }
    const data = await response.json();
    return data;
}