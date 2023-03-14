export default {
  _find: ({ level = { $regex: "" }, position = { $regex: "" } }) => ({
    level,
    position,
  }),
  _sort: ({ _sort = "postedAt", _asc = -1 }) => ({}), // nao faz nada
};
