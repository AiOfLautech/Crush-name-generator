const definitions = {
    A: ["Amazingly Wonderful", "Always on My Mind", "Angel of My Dreams"],
    B: ["Best Part of My Life", "Beautiful Soul", "Brilliant and Bright"],
    C: ["Charming and Charismatic", "Cherished Forever", "Center of My World"],
    D: ["Dear to My Heart", "Dream Come True", "Delightful Presence"],
    E: ["Endless Love", "Enchanting Smile", "Eternal Sunshine"],
    F: ["Forever in My Heart", "Fabulous and Fun", "Faithful Companion"],
    G: ["Gift from Above", "Gorgeous and Gracious", "Golden Heart"],
    H: ["Heart of Gold", "Happiness in My Life", "Heavenly Presence"],
    I: ["Irreplaceable Love", "Incredible Soul", "Inspiration in My Life"],
    J: ["Joy of My Life", "Jewel of My Heart", "Just Perfect"],
    K: ["Kind and Caring", "Key to My Happiness", "Knight in Shining Armor"],
    L: ["Love of My Life", "Lovely and Loyal", "Luminous Star"],
    M: ["Magical Moments", "My True Love", "Miracle in My Life"],
    N: ["Never-ending Love", "Nicest Person Ever", "Not Just a Crush"],
    O: ["Only You", "One of a Kind", "Outstandingly Special"],
    P: ["Precious and Pure", "Perfect in Every Way", "Peace of My Heart"],
    Q: ["Queen of My Heart", "Quintessential Beauty", "Quiet Strength"],
    R: ["Radiant Smile", "Reason for My Joy", "Rare Gem"],
    S: ["Soulmate Forever", "Sweetest Love", "Source of My Happiness"],
    T: ["Treasure of My Life", "True Love", "Tender and Loving"],
    U: ["Unconditionally Loved", "Unforgettable", "Universe's Gift"],
    V: ["Valuable Beyond Measure", "Very Special", "Vibrant Love"],
    W: ["Wonderful Person", "Wish Come True", "Warm Heart"],
    X: ["X-factor in My Life", "Xtraordinary Love", "XOXO (Hugs and Kisses)"],
    Y: ["You Are My Everything", "Yours Forever", "Youthful Spirit"],
    Z: ["Zeal of My Life", "Zest for Life", "Zillion Reasons to Love You"]
};

function generateDefinition() {
    const name = document.getElementById("nameInput").value.toUpperCase();
    let output = "";
    for (let i = 0; i < name.length; i++) {
        const letter = name[i];
        if (definitions[letter]) {
            const randomDefinition = definitions[letter][Math.floor(Math.random() * definitions[letter].length)];
            output += `<div><span class="letter">${letter}</span> - <span class="definition">${randomDefinition}</span></div>`;
        } else {
            output += `<div><span class="letter">${letter}</span> - <span class="definition">No definition found</span></div>`;
        }
    }
    document.querySelector('.output').innerHTML = output;
}

document.querySelector('button').addEventListener('click', generateDefinition);
