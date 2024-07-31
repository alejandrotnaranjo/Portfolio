function Link({ href, src }) {
  return (
    <a href={href} target="_blank">
      <img id="socialMediaIcon" src={src} alt="" />
    </a>
  );
}

export default Link;
