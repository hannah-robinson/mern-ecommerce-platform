import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isadmin: true,
  },
  {
    name: 'Juan Gomez',
    email: 'juan@email.com',
    password: bcrypt.hashSync('123456', 10),
    isadmin: false,
  },
  {
    name: 'Paula Diaz',
    email: 'paula@email.com',
    password: bcrypt.hashSync('123456', 10),
    isadmin: false,
  },
]

export default users
