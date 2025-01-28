const PixelCanvas = React.forwardRef((props, ref) => (
  <canvas 
    ref={ref}
    className="w-full h-full overflow-hidden"
    {...props}
  />
));
