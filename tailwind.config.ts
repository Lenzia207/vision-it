module.exports = {
    // Twailwind colors that are fecthed dynamically from the API and used in the UI. We need to safelist them to prevent purging during production build. 
    safelist: [
        'text-blue-400',
        'text-pink-400',
        'text-cyan-400',
        'text-orange-400',
        'text-white',
        'text-zinc-400',
    ],

}