function Carousel({ src, children,right,maxWidth }) {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <div
      className="h-screen bg-cover w-screen bg-no-repeat"
      style={{ backgroundImage: `url(${src})`,maxHeight: "700px"  }}
      onDragStart={handleDragStart}
    >
      <div className={`${maxWidth} mx-auto flex ${right?'justify-end':'justify-start text-white'}  items-center h-full font-black`}>
        {children}
      </div>
    </div>
  );
}

export default Carousel;
