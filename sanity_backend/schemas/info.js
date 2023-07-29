import { BiInfoCircle } from "react-icons/bi";

export default {
    name: "info",
    title: "Shop Information",
    type: "document",
    icon: BiInfoCircle,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required(),
        },
        {
            name: "logo",
            title: "Logo",
            type: 'image',
            options: {
                hotspot: true,
            },

        },
        {
            name: "phoneNo",
            title: "Phone Number",
            type: "number",
            validation: Rule => Rule.required(),
        },
        {
            name: "email",
            title: "Email",
            type: "string",

        },
        {
            name: 'address',
            title: "Address",
            type: "string",
        },
        {
            name: 'addressUrl',
            title: 'Google Maps Url',
            type: "url"
        },
        {
            name: "instagram",
            title: "Instagram Url",
            type: "url",

        },
        {
            name: 'facebook',
            title: "Facebook Url",
            type: "url",
        },



    ],
};