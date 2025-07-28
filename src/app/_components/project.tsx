import Link from "next/link";

export const Project = ({
  category,
  title,
  description,
  techs,
  url,
  imageUrl,
}: {
  category: string;
  title: string;
  description: string;
  techs: string[];
  url?: string;
  imageUrl: string;
}) => (
  <div className="p-4">
    <div className="flex items-stretch justify-between gap-4 rounded">
      <div className="flex flex-[2_2_0px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[#51946b] text-sm font-normal leading-normal">
            {category}
          </p>
          <p className="text-[#0e1a13] text-base font-bold leading-tight">
            {title}
          </p>
          <p className="text-[#51946b] text-sm font-normal leading-normal">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#e8f2ec] text-[#0e1a13] border border-[#d1e6d9] hover:border-[#39e079] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        {url && (
          <Link href={url ?? "#"} target="_blank">
            <button
              disabled={!url}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit hover:bg-[#d1e6d9] transition-colors"
            >
              <span className="truncate">View Project</span>
            </button>
          </Link>
        )}
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded flex-1 hover:scale-105 transition-transform"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
    </div>
  </div>
);
