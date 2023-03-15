export function JobsSort({ handles, sort = "" }) {
  handles = {
    ...handles,

    onSort: ({ field, value }) =>
      handles.setParams((params) => ({
        ...params,
        [field]: value,
      })),
  };

  return (
    <section className="container flex flex-row-reverse py-4 my-6">
      {["descending", "ascending"].map((_sort) => (
        <a
          key={_sort}
          className={`p-2 px-6 capitalize ${
            sort == _sort.slice(0, 3) ? "bg-primary text-white" : "bg-white"
          }`}
          onClick={() => handles.setSort(_sort.slice(0, 3))}
          href="#"
        >
          {_sort}
        </a>
      ))}
      <label className="p-2 font-bold">Sort by position:</label>
    </section>
  );
}
