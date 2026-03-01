type ExhibitionArtist = {
  name: string;
};

type Credit = {
  label: string;
  value: string;
};

type ExhibitionInfo = {
  concept?: string;
  artists?: ExhibitionArtist[];
  credits?: Credit[];
};

export default function ExhibitionSection({ info }: { info: ExhibitionInfo }) {
  return (
    <>
      {/* Concept */}
      {info.concept && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-gray-400 uppercase">
              Concept
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base md:text-lg leading-relaxed font-light whitespace-pre-line">
              {info.concept}
            </p>
          </div>
        </div>
      )}

      {/* Artists */}
      {info.artists && info.artists.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-gray-400 uppercase">
              Artists
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3">
              {info.artists.map((artist, index) => (
                <li key={index} className="text-sm font-light">
                  {artist.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Credits */}
      {info.credits && info.credits.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 md:py-24">
          <div className="md:col-span-4">
            <h2 className="text-xs tracking-widest text-gray-400 uppercase">
              Credits
            </h2>
          </div>
          <div className="md:col-span-8">
            <dl className="space-y-3">
              {info.credits.map((credit, index) => (
                <div key={index} className="flex items-baseline gap-4">
                  <dt className="text-xs text-gray-400 tracking-wider shrink-0 w-24">
                    {credit.label}
                  </dt>
                  <dd className="text-sm font-light">{credit.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </>
  );
}
