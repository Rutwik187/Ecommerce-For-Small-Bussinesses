export default {
    name: 'coupon',
    title: 'Coupon Codes',
    type: 'document',
    fields: [{
        name: 'coupon',
        title: 'Coupon Code',
        type: 'string',
        validation: Rule => Rule.required(),
    },
    {
        name: 'percentageDiscount',
        title: 'Percentage Discount [*no need to enter percentage symbol]',
        type: 'number',

        validation: Rule => Rule.required().max(100),
    },
    {
        name: 'totalGreaterThen',
        title: 'Apply coupon only if the amount exceeds...',
        type: 'number',

        validation: Rule => Rule.required()
    },
    ],
};
