/** Soft blurred gradient blobs behind content for the glassmorphism depth. */
export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(30,58,95,0.16),transparent_65%)] blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18),transparent_65%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(61,90,128,0.14),transparent_65%)] blur-3xl" />
    </div>
  );
}
