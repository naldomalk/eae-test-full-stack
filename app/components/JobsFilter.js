export function JobsFilter({ data, handles, params }) {
  return (
    <section className="container grid grid-cols-2 bg-white my-6">
      <div className="flex grow">
        {data.jobs?.map((job) => (
          <div key={`job-filter-${job.id}`} className="grid grid-cols-2">
            {"filter"}
          </div>
        ))}
      </div>
      <a className="underline" onClick={() => null} href="#">
        Clear
      </a>
    </section>
  );
}
