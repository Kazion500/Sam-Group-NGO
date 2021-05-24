function CardIcon({ src, content }) {
  return (
    <figure className="items-center text-center flex flex-col">
      <img className="" src={src} alt="" />
      <figcaption className="mt-5 font-bold w-72 lg:text-xl text-green-700">
        <p>{content}</p>
      </figcaption>
    </figure>
  );
}

export default CardIcon;
