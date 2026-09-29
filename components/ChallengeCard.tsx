import Link from "next/link";

export default function ChallengeCard({
  title,
  desc,
  icon,
  href,
  users,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
  users: string;
}) {
  return (
    <Link href={href} className="block group h-full">
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
        {/* Tool Icon Box */}
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-1">{desc}</p>

        {/* Footer with avatars */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white z-20"></div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white z-10"></div>
            <div className="w-6 h-6 rounded-full bg-orange-100 border-2 border-white z-0"></div>
          </div>
          <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
            PD
          </span>
          <span className="text-xs text-gray-500 font-medium">
            +{users} other analysts
          </span>
        </div>
      </div>
    </Link>
  );
}
