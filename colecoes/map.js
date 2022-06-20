function getAdmins(map) {
  let admins = [];
  for([key, value] of map){
    if(value === "Admin"){
      admins.push(key)
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Douglas', 'Admin');
usuarios.set('Tramonta', 'Admin');
usuarios.set('Luiza', 'User');
usuarios.set('Danilo', 'Admin');

console.log(getAdmins(usuarios));