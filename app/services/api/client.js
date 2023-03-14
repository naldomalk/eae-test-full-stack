export default async function api({
  method = "GET",
  route = "/",
  setLoading = () => null,
  success = () => null,
}) {
  setLoading(true);

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const options = { headers, method };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${route}`, options);
  const data = await res.json();

  success(data);
  setLoading(false);

  return data;
}
