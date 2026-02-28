export default function Tagline({ text }: { text: string }) {
  return (
    <p className="mb-16 md:mb-20 text-sm tracking-wide text-gray-400 font-light">
      {text}
    </p>
  );
}
