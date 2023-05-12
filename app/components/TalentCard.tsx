import { TalentProps } from "@/lib/common.types";

const TalentCard = ({ first_name, last_name, phone_number, id, img_url }: TalentProps) => {

    return (
        <div className="bg-white rounded shadow p-4" key={id}>
            <img className="w-full h-64 rounded mb-4" src={img_url} alt="" />
            <h2 className="text-2xl font-bold mb-2">{`${first_name} ${last_name}`}</h2>
            <p className="text-sm text-gray-500">{phone_number}</p>
        </div>
    )
}

export default TalentCard;