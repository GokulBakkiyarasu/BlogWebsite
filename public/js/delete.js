function _delete(element) {
  const id = element.id;
  const url = `/delete/${id}`;

  fetch(url, {
    method: "DELETE", // Specify the DELETE method
  });
}
