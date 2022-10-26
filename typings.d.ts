interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "references";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: image;
    name: string;
    phoneNumber: string;
    profilePic: image;
}

export interface Technology extends SanityBody{
    _type: "skill";
    image: image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody{
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorking: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}