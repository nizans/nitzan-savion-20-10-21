import QueryError from "./query.error";

const defaultRequestOptions = {
  method: "GET",
  headers: new Headers({ "Accept-Encoding": "gzip" }),
};

export const _fetch = async (queryKey, url, options = defaultRequestOptions) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    if (response.headers.get("Content-Type") === "application/json") {
      const serverError = await response.json();
      throw new QueryError(queryKey, serverError.Message || serverError.message);
    }
    throw new QueryError(queryKey, "Error while fetching data...");
  }
  if (response.headers.get("Content-Type").split("/")[0] === "image") return await response.blob();
  if (response.status === 204) return;
  return await response.json();
};
