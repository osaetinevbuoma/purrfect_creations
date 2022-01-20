import { BackgroundColor } from "../../constants";

interface ISnapshotCard {
  title: string;
  value: number | string;
  cardColor: string;
  icon: any;
}

const cardColorClasses: { [key: string]: any } = {};
cardColorClasses[BackgroundColor.GREEN] = {
  gradient: "from-green-200 to-green-100 border-green-600",
  icon: "bg-green-600",
};
cardColorClasses[BackgroundColor.BLUE] = {
  gradient: "from-blue-200 to-blue-100 border-blue-600",
  icon: "bg-blue-600",
};
cardColorClasses[BackgroundColor.INDIGO] = {
  gradient: "from-indigo-200 to-indigo-100 border-indigo-600",
  icon: "bg-indigo-600",
};
cardColorClasses[BackgroundColor.YELLOW] = {
  gradient: "from-yellow-200 to-yellow-100 border-yellow-600",
  icon: "bg-yellow-600",
};
console.log(cardColorClasses);

const SnapshotCard = ({
  title,
  value,
  cardColor,
  icon
}: ISnapshotCard): JSX.Element => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/2 p-6">
      <div
        className={`p-5 bg-gradient-to-b ${cardColorClasses[cardColor].gradient} border-b-4 rounded-lg shadow-xl p-5"`}
      >
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={`rounded-full p-5 ${cardColorClasses[cardColor].icon}`}>
              {icon}
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">{title}</h2>
            <p className="font-bold text-3xl">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapshotCard;
