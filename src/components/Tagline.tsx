export default function Tagline({ text }: { text: string }) {
  return (
    <p className="mt-6 mb-10 text-sm tracking-wide text-gray-400 font-light">
      {text}
    </p>
  );
}
