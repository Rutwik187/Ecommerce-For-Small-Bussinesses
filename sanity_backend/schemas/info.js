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
            name: 'aboutUs',
            title: 'About Us [Write at-least a paragraph about your shop for About Us page]',
            type: 'blockContent',
        },
        {
            name: 'shopImg',
            title: 'Image to display on About us page',
            type: 'image',
            options: {
                hotspot: true,
            },
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
        {
            name: 'embedMap',
            title: 'Embed Map in contact us [copy from only https.;. before width...',
            type: 'url'
        }


    ],
};