const Card = ({ icon, label, activeColor = '#e3e3e3', pixelProps }) => {
  return (
    <div className="
      relative
      overflow-hidden
      grid
      place-items-center
      aspect-[4/5]
      border
      border-zinc-800
      transition-colors
      duration-200
      group
      isolate
      hover:border-[var(--active-color)]
      focus-within:border-[var(--active-color)]
    " style={{ '--active-color': activeColor }}>
      <PixelCanvas {...pixelProps} />
      
      <div className="
        relative
        z-10
        w-[30%]
        text-zinc-500
        transition-colors
        duration-300
        group-hover:text-[var(--active-color)]
        group-hover:scale-110
      ">
        {icon}
      </div>
      
      <button className="
        absolute
        opacity-0
        text-sm
        font-medium
        tracking-wide
        transition-opacity
        duration-300
        group-hover:opacity-100
      ">
        {label}
      </button>
    </div>
  );
};
