export function JobsFilter({ handles, params }) {
  handles = {
    ...handles,

    onFilter: ({ field, value }) =>
      handles.setParams((params) => ({
        ...params,
        [field]: value,
      })),

    onRemoveFilter: (param) => {
      const newParams = { ...{}, ...params };

      delete newParams[param];

      handles.setParams(newParams);
    },
  };

  return (
    <section className="container grid grid-cols-2 bg-white py-4 my-6">
      <div className="flex grow text-sm">
        {!params.role && (
          <div className="px-4">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              onChange={(e) =>
                handles.onFilter({ field: "role", value: e.target.value })
              }
            >
              <option></option>
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </div>
        )}
        {!params.level && (
          <div className="px-4">
            <label htmlFor="level">Level:</label>
            <select
              id="level"
              onChange={(e) =>
                handles.onFilter({ field: "level", value: e.target.value })
              }
            >
              <option></option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </div>
        )}
        {Object.keys(params || {})
          ?.filter((param) => param[0] != "_")
          .map((param, index) => (
            <div
              key={`filter-${index}`}
              className="flex rounded bg-grey-50 mx-4"
            >
              <div className="px-2">{params[param]}</div>
              <a
                className="bg-primary px-1 hover:bg-black hover:text-white"
                href="#"
                onClick={() => handles.onRemoveFilter(param)}
              >
                X
              </a>
            </div>
          ))}
      </div>
      <div className="text-right px-4">
        <a className="underline" onClick={() => handles.setParams({})} href="#">
          Clear
        </a>
      </div>
    </section>
  );
}
