function SocialLink({ href, src }) {
  return (
    <a href={href} target="_blank">
      <img id="socialImg" src={src} alt="" />
    </a>
  );
}

export default SocialLink;
