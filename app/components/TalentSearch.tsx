"use client"
import { useState, useEffect } from "react"
import { getTalent } from "../services/talent.service"
import { TalentProps } from "@/lib/common.types"
import TalentCard from "./TalentCard"
import SearchBar from "./SearchBar"

const TalentSearch = () => {
    const [talentList, setTalentList] = useState<TalentProps[]>([]);

    useEffect(() => {
        const fetchTalent = async () => {
            const result = await getTalent();
            console.log(result)

            setTalentList(result);
        };
        fetchTalent();

    }, []);

    const handleSearch = (query: string) => {
        // const talent = talentList.filter(t=> t.)
    }


    return <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 ">
            <SearchBar onSearch={handleSearch} />
            {talentList.map((talent) => {
                return <TalentCard key={talent.id} first_name={talent.first_name} last_name={talent.last_name} phone_number={talent.phone_number} id={talent.id} img_url="text" />
            })}
        </div>
    </div>


}

export default TalentSearch;