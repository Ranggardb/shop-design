function AppImage(props) {
  const { src, name } = props;

  return (
    <img
      className=" w-full object-cover object-center rounded-lg group-hover:opacity-75"
      src={src}
      alt={name}
    ></img>
  );
}

export default AppImage;
