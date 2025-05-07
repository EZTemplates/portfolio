/**
 * 
{
    "_id": "681754910aef6caeec6f0e1d",
    "url": "https://buymeacoffee.com/igaurav.dev",
    "user_id": "6817541b0aef6caeec6f0df9",
    "config": {
        "name": "Coffee",
        "logo": "https://gameimagebucket.s3.ap-south-1.amazonaws.com/portfolio/social-buttons/6817547e0aef6caeec6f0e15.png",
        "btn_color": "#facc15"
    },
    "createdAt": "2025-05-04T11:50:41.687Z"
}
 */

export interface ISocialLink {
    _id: string;
    url: string;
    user_id: string;
    config: {
        name: string;
        logo: string;
        btn_color: string;
    };
    createdAt: string;
}