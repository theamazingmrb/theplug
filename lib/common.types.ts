export interface TalentProps {
    first_name: string;
    last_name: string;
    phone_number: string;
    img_url: string;
    id: string;
    email: string;
    title: string;
    company: string;
    city: string;
    state: string;
    bio: string;
    searchable: boolean;
    preferred_contact_method: string;
    password: string | null;
}

export interface SearchBarProps {
    onSearch: (query: string) => void;
}