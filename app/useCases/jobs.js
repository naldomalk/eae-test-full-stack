export default {
  _find: ({ level = { $regex: "" }, role = { $regex: "" } }) => ({
    level,
    role,
  }),
  _sort: ({ _sort = "postedAt", _asc = -1 }) => ({}), // nao faz nada
};
