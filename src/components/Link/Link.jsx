function Link({ href, page }) {
  return (
    <a href={href} target="_blank">
      {page}
    </a>
  );
}

export default Link;
