const user = {
  id: 1,
  name: "John",
  age: 25,
};

const id = JSON.stringify(user.id);
const value = JSON.stringify(`${user.name} - ${user.age}`);

localStorage.setItem(id, value );

