export default {
  users: [
    {
      username: "admin",
      password: "admin",
      firstname: "first admin",
      lastname: "last admin",
      email: "admin@admin.com",
      address: "Douala",
      photo: "",
      role: "",
    },
    {
      username: "user",
      password: "user",
      firstname: "first user",
      lastname: "last user",
      email: "user@user.com",
      address: "Douala",
      photo: "",
      role: "",
    },
  ],
  roles: [
    {
      name: "ADMIN",
      authorities: ["ADMIN", "USER"],
      description: "Administrateur par defaut de l'application",
    },
    {
      name: "USER",
      authorities: ["USER"],
      description: "Utilisateur par defaut de l'application",
    },
  ],
};
