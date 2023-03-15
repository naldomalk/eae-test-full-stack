export function Loading({ loading }) {
  return !loading ? null : (
    <div className="text-center text-5xl w-full absolute p-40">Loading...</div>
  );
}
