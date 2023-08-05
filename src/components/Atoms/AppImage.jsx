function AppImage(props) {
  const { src, name } = props;

  return (
    <img
      className="w-full h-full object-cover object-center rounded-t-lg group-hover:opacity-75"
      src={src}
      alt={name}
    ></img>
  );
}

export default AppImage;
